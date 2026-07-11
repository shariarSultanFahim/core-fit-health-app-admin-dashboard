"use client"

import { ReactNode } from "react"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export function FAQFormSheet({ children, faq }: { children: ReactNode, faq?: any }) {
  const isEditing = !!faq

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{isEditing ? "Edit FAQ" : "Create New FAQ"}</SheetTitle>
          <SheetDescription>
            {isEditing ? "Update the FAQ details below." : "Add a new frequently asked question to the knowledge base."}
          </SheetDescription>
        </SheetHeader>
        <div className="py-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Input id="question" defaultValue={faq?.question || ""} placeholder="E.g. How do I reset my password?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="answer">Answer</Label>
            <Textarea 
              id="answer" 
              placeholder="Provide the answer here..." 
              className="min-h-[120px]" 
            />
          </div>
          <div className="space-y-2">
            <Label>Category</Label>
            <Select defaultValue={faq?.category || "General"}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Billing">Billing</SelectItem>
                <SelectItem value="Integrations">Integrations</SelectItem>
                <SelectItem value="Health Data">Health Data</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Select defaultValue={faq?.status || "draft"}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button onClick={() => toast.success(isEditing ? "FAQ updated" : "FAQ created")}>
              <Save className="w-4 h-4 mr-2" />
              {isEditing ? "Save Changes" : "Create FAQ"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
