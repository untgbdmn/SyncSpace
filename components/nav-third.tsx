import * as React from "react"
import { LucideIcon } from "lucide-react" // Pastikan Anda mengimpor ikon yang tepat
import {
    SidebarMenuButton,
} from "@/components/ui/sidebar"

interface NavThird {
    url: string
    Icon: LucideIcon
    title: string
}

export function NavThird({ url, Icon, title, }: NavThird) {
    return (
        <SidebarMenuButton asChild size="sm" className="px-2 py-4">
                <a href={url}>
                    <Icon />
                    <span>{title}</span>
                </a>
            </SidebarMenuButton>
    )
}
