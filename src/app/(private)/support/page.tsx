"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "@/components/widgets/page-header"

import { FeedbackTable } from "./components/feedback-table"
import { SupportTicketsTable } from "./components/support-tickets-table"

export default function SupportPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 pt-6 animate-fade-up">
      <PageHeader 
        title="Help & Support" 
        subtitle="Manage user support tickets and review app feedback."
      />

      <Tabs defaultValue="tickets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
          <TabsTrigger value="feedback">User Feedback</TabsTrigger>
          <TabsTrigger value="faq">FAQ Management</TabsTrigger>
        </TabsList>
        <TabsContent value="tickets" className="space-y-4">
          <SupportTicketsTable />
        </TabsContent>
        <TabsContent value="feedback" className="space-y-4">
          <FeedbackTable />
        </TabsContent>
        {/* <TabsContent value="faq" className="space-y-4">
          <div className="p-8 text-center text-muted-foreground border rounded-lg bg-card">
            FAQ Management Module coming in v2.
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}
