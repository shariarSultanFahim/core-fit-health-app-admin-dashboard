"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/widgets/data-table"
import { mockContent } from "@/data"
import { AnnouncementFormSheet } from "./announcement-form-sheet"

type Announcement = typeof mockContent.announcements[0]

const columns: ColumnDef<Announcement>[] = [
  {
    accessorKey: "title",
    header: "Announcement",
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "sentTo",
    header: "Target Audience",
  },
  {
    accessorKey: "sentAt",
    header: "Date Sent",
  },
  {
    accessorKey: "openRate",
    header: "Open Rate",
    cell: ({ row }) => <div className="font-bold font-sans text-health-teal">{row.getValue("openRate")}</div>,
  },
]

export function AnnouncementsTable() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">In-App Announcements</h3>
        <AnnouncementFormSheet>
          <Button>
            <Send className="mr-2 h-4 w-4" />
            New Announcement
          </Button>
        </AnnouncementFormSheet>
      </div>
      <DataTable 
        columns={columns} 
        data={mockContent.announcements} 
        searchKey="title" 
        searchPlaceholder="Search announcements..."
      />
    </div>
  )
}
