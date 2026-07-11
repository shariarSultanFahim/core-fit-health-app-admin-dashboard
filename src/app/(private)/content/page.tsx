"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageHeader } from "@/components/widgets/page-header"

import { ContentTable } from "./components/content-table"
import { AnnouncementsTable } from "./components/announcements-table"
import { FAQTable } from "./components/faq-table"

export default function ContentPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 pt-6 animate-fade-up">
      <PageHeader 
        title="Content Management" 
        subtitle="Manage articles, recipes, lessons, in-app announcements, and FAQs."
      />

      <Tabs defaultValue="articles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="articles">Articles & Lessons</TabsTrigger>
          <TabsTrigger value="recipes">Recipes & Meal Plans</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="space-y-4">
          <ContentTable type="articles" />
        </TabsContent>
        <TabsContent value="recipes" className="space-y-4">
          <ContentTable type="recipes" />
        </TabsContent>
        <TabsContent value="announcements" className="space-y-4">
          <AnnouncementsTable />
        </TabsContent>
        <TabsContent value="faq" className="space-y-4">
          <FAQTable />
        </TabsContent>
      </Tabs>
    </div>
  )
}
