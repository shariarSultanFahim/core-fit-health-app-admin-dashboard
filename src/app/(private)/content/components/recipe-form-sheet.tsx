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

export function RecipeFormSheet({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="overflow-y-auto sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Add Recipe</SheetTitle>
          <SheetDescription>
            Create a new healthy recipe or meal plan.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          <div className="space-y-2">
            <Label htmlFor="r-title">Recipe Title</Label>
            <Input id="r-title" placeholder="e.g. Keto Avocado Salad" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="r-prep">Prep Time</Label>
              <Input id="r-prep" placeholder="e.g. 15 mins" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="r-cals">Calories</Label>
              <Input id="r-cals" placeholder="e.g. 350" type="number" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="r-ingredients">Ingredients</Label>
            <Textarea 
              id="r-ingredients" 
              placeholder="List ingredients here..." 
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="r-instructions">Instructions</Label>
            <Textarea 
              id="r-instructions" 
              placeholder="Step by step instructions..." 
              className="min-h-[150px]"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit">
            <Save className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
