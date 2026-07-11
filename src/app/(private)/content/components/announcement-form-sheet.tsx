"use client"

import { ReactNode } from "react"
import { Send } from "lucide-react"

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

export function AnnouncementFormSheet({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>New In-App Announcement</SheetTitle>
          <SheetDescription>
            Broadcast an announcement to user devices. It will appear as an alert inside the app.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          <div className="space-y-2">
            <Label htmlFor="a-title">Title</Label>
            <Input id="a-title" placeholder="e.g. System Maintenance" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="a-audience">Target Audience</Label>
            <Input id="a-audience" placeholder="e.g. All Users" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="a-message">Message</Label>
            <Textarea 
              id="a-message" 
              placeholder="Announcement text..." 
              className="min-h-[150px]"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit">
            <Send className="w-4 h-4 mr-2" />
            Send Now
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
