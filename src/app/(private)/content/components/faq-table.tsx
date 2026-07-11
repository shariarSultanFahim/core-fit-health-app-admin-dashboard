"use client"

import { ColumnDef } from "@tanstack/react-table"
import { HelpCircle, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/widgets/data-table"
import { FAQFormSheet } from "./faq-form-sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mockFaqs = [
  { id: "1", question: "How is the Metabolic Score calculated?", category: "General", status: "published" },
  { id: "2", question: "Can I connect my Apple Watch?", category: "Integrations", status: "published" },
  { id: "3", question: "How do I cancel my subscription?", category: "Billing", status: "draft" },
  { id: "4", question: "What do the different health zones mean?", category: "General", status: "published" },
]

type FAQ = typeof mockFaqs[0]

const columns: ColumnDef<FAQ>[] = [
  {
    accessorKey: "question",
    header: "Question",
    cell: ({ row }) => <div className="font-medium">{row.getValue("question")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize text-sm font-medium">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    id: "actions",
    cell: function ActionCell({ row }) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <FAQFormSheet faq={row.original}>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit FAQ</DropdownMenuItem>
            </FAQFormSheet>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function FAQTable() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Frequently Asked Questions</h3>
        <FAQFormSheet>
          <Button>
            <HelpCircle className="mr-2 h-4 w-4" />
            New FAQ
          </Button>
        </FAQFormSheet>
      </div>
      <DataTable 
        columns={columns} 
        data={mockFaqs} 
        searchKey="question" 
        searchPlaceholder="Search questions..."
      />
    </div>
  )
}
