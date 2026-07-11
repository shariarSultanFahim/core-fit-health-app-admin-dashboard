"use client"

import { PageHeader } from "@/components/widgets/page-header"
import { UsersTable } from "./components/users-table"
import { mockUsers } from "@/data"

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 pt-6 animate-fade-up">
      <PageHeader 
        title="User Management" 
        subtitle="Manage platform users, subscriptions, and metabolic profiles."
      />

      <div className="flex-1">
        <UsersTable data={mockUsers} />
      </div>
    </div>
  )
}
