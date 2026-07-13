"use client";
import {
  Activity,
  BarChart3,
  Bell,
  BookOpen,
  CreditCard,
  Dumbbell,
  FlaskConical,
  HeartHandshake,
  LayoutDashboard,
  LogOut,
  Settings,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar";

import { Button } from "../ui";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const data = {
  info: {
    title: "CoreFit Health",
    subtitle: "Admin Dashboard"
  },
  navMain: [
    {
      title: "Platform",
      items: [
        { title: "Overview", url: "/overview", icon: LayoutDashboard },
        { title: "User Management", url: "/users", icon: Users },
        { title: "Membership", url: "/membership", icon: CreditCard },
        { title: "Analytics", url: "/analytics", icon: BarChart3 },
      ]
    },
    {
      title: "Content & Comm",
      items: [
        { title: "Content", url: "/content", icon: BookOpen },
        { title: "Notifications", url: "/notifications", icon: Bell },
        { title: "Help & Support", url: "/support", icon: HeartHandshake },
      ]
    },
    {
      title: "Health & Fitness",
      items: [
        { title: "Fitness Tracking", url: "/fitness", icon: Dumbbell },
        { title: "Lab Results", url: "/lab-results", icon: FlaskConical },
        { title: "Metabolic Index", url: "/metabolic-index", icon: Activity },
      ]
    },
    {
      title: "System",
      items: [
        { title: "Settings", url: "/settings", icon: Settings },
      ]
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   const pathname = usePathname();

  return (
    <Sidebar variant="inset" collapsible="icon" className="transition-all duration-300 ease-in-out" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                </div>
                <div className="grid flex-1 text-sm leading-tight">
                  <span className="truncate text-sm font-bold">{data.info.title}</span>
                  <span className="truncate text-xs font-semibold sidebar-accent-foreground">
                    {data.info.subtitle}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
       <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={pathname === item.url}
                      className="data-[active=true]:bg-sidebar-accent data-[active=true]:shadow-md data-[active=true]:backdrop-blur-sm data-[active=true]:sidebar-accent-foreground"
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="space-y-5">
            <div className="hidden flex-col gap-4 group-data-[collapsible=icon]:flex">
              <Avatar size="lg" className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
              <div className="flex items-center justify-start gap-4">
                <Avatar size="lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">John Doe</h2>
                  <h3 className="text-sm text-gray-500">john@riseimpact.com</h3>
                </div>
              </div>
            </div>
            <SidebarMenuButton asChild className="group-data-[collapsible=icon]:w-full">
              <Button variant="outline" className="w-full bg-transparent border-secondary group-data-[collapsible=icon]:p-0">
                <LogOut className="size-4 group-data-[collapsible=icon]:h-5 group-data-[collapsible=icon]:w-5" />
                <span className="group-data-[collapsible=icon]:hidden">Sign Out</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
