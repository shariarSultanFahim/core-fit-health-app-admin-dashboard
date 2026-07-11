"use client"

import { Activity, CreditCard, TrendingUp, Users } from "lucide-react"

import { KpiCard } from "@/components/widgets/kpi-card"
import { PageHeader } from "@/components/widgets/page-header"
import { mockAnalytics } from "@/data"

import { PlanDistributionChart } from "./components/plan-distribution-chart"
import { RecentActivity } from "./components/recent-activity"
import { RevenueChart } from "./components/revenue-chart"
import { UserGrowthChart } from "./components/user-growth-chart"


export default function OverviewPage() {
  const { overview } = mockAnalytics;

  return (
    <div className="flex-1 space-y-4 p-4 md:p-6 pt-6">
      <PageHeader 
        title="Good morning, Admin 👋" 
        subtitle="Here's what's happening with CoreFit today."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Total Users"
          value={overview.totalUsers.value.toLocaleString()}
          delta={overview.totalUsers.delta}
          deltaDirection="up"
          icon={<Users className="h-4 w-4" />}
        />
        <KpiCard
          title="Active Users"
          value={overview.activeUsers.value.toLocaleString()}
          delta={overview.activeUsers.delta}
          deltaDirection="up"
          icon={<Activity className="h-4 w-4" />}
        />
        <KpiCard
          title="Paid Users"
          value={overview.paidUsers.value.toLocaleString()}
          delta={overview.paidUsers.delta}
          deltaDirection="up"
          icon={<CreditCard className="h-4 w-4" />}
        />
        <KpiCard
          title="MRR Revenue"
          value={`$${overview.mrr.value.toLocaleString()}`}
          delta={overview.mrr.delta}
          deltaDirection="up"
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 lg:col-span-4 min-w-0">
          <RevenueChart />
        </div>
        <div className="col-span-4 lg:col-span-3 min-w-0">
          <PlanDistributionChart />
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 lg:col-span-4 min-w-0">
          <UserGrowthChart />
        </div>
        <div className="col-span-4 lg:col-span-3 min-w-0">
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
