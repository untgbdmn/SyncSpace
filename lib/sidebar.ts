import { SquareTerminal } from 'lucide-react';

type SidebarItem = {
  title: string;
  url: string;
};

type SidebarSection = {
  title: string;
  url: string;
  icon: React.ComponentType;
  isActive: boolean;
  items: SidebarItem[];
};

export const Pengaturan: SidebarSection[] = [
  {
    title: "Pengaturan",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "History",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Settings",
        url: "#",
      },
    ],
  },
];



// navMain: [
//     {
//         title: "Playground",
//         url: "#",
//         icon: SquareTerminal,
//         isActive: true,
//         items: [
//             {
//                 title: "History",
//                 url: "#",
//             },
//             {
//                 title: "Starred",
//                 url: "#",
//             },
//             {
//                 title: "Settings",
//                 url: "#",
//             },
//         ],
//     },
//     {
//         title: "Models",
//         url: "#",
//         icon: Bot,
//         items: [
//             {
//                 title: "Genesis",
//                 url: "#",
//             },
//             {
//                 title: "Explorer",
//                 url: "#",
//             },
//             {
//                 title: "Quantum",
//                 url: "#",
//             },
//         ],
//     },
//     {
//         title: "Documentation",
//         url: "#",
//         icon: BookOpen,
//         items: [
//             {
//                 title: "Introduction",
//                 url: "#",
//             },
//             {
//                 title: "Get Started",
//                 url: "#",
//             },
//             {
//                 title: "Tutorials",
//                 url: "#",
//             },
//             {
//                 title: "Changelog",
//                 url: "#",
//             },
//         ],
//     },
//     {
//         title: "Settings",
//         url: "#",
//         icon: Settings2,
//         items: [
//             {
//                 title: "General",
//                 url: "#",
//             },
//             {
//                 title: "Team",
//                 url: "#",
//             },
//             {
//                 title: "Billing",
//                 url: "#",
//             },
//             {
//                 title: "Limits",
//                 url: "#",
//             },
//         ],
//     },
// ],
// navSecondary: [
//     {
//         title: "Support",
//         url: "#",
//         icon: LifeBuoy,
//     },
//     {
//         title: "Feedback",
//         url: "#",
//         icon: Send,
//     },
// ],
// projects: [
//     {
//         name: "Design Engineering",
//         url: "#",
//         icon: Frame,
//     },
//     {
//         name: "Sales & Marketing",
//         url: "#",
//         icon: PieChart,
//     },
//     {
//         name: "Travel",
//         url: "#",
//         icon: Map,
//     },
// ],
