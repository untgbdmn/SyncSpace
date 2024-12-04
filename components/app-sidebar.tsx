"use client"

import * as React from "react"
import {
    BookOpen,
    Command,
} from "lucide-react"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavThird } from "./nav-third"
import { NavMain } from "./nav-main"
import { Pengaturan } from "@/lib/sidebar"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    session?: {
        user?: {
            name: string;
            email: string;
            avatar: string;
        };
    };
}

export function AppSidebar({ session, ...props }: AppSidebarProps) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{session?.user?.name}</span>
                                    <span className="truncate text-xs">{session?.user?.email}</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavThird url="/home" Icon={BookOpen} title="Home" />
                <NavThird url="/home" Icon={BookOpen} title="Home" />
                <NavMain items={Pengaturan} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={session?.user} />
            </SidebarFooter>
        </Sidebar>
    )
}
