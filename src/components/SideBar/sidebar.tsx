"use client";

import Link from "next/link";
import { Montserrat } from 'next/font/google'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { GiOvermind } from "react-icons/gi";
import { cn } from "@/lib/utils";
// import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat({ weight: '800', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-emerald-500",
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    href: '/code',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card ">

      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center justify-center  mt-6 mb-10  ">
          <div className="relative h-8 w-8 mr-4 text-3xl ">
            
            <GiOvermind style={{ fill: "url(#blue-gradient)" }} />
          </div>
          <h1 className={cn("text-3xl font-bold super", poppins.className)}>
            MinAI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/30 rounded-lg transition",
                pathname === route.href ? "super font-bold " : "",
              )}
            >
              <div className="flex items-center flex-1 justify-end ">
              {route.label}
                <route.icon className={cn("h-5 w-5 ml-3", route.color)} />
             
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      /> */}
    </div>
  );
};