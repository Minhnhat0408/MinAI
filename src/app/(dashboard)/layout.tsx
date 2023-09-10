import NavBar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import React from "react";

function DashBoardLayout(
    {
        children
    }: { children: React.ReactNode }
) {
    return (
        <div className="flex">
            
            <main className=" w-full md:pr-64"><NavBar/>{children}</main>
            <aside className="h-full relative">
                <div className="hidden h-full  md:flex md:right-0 md:flex-col md:fixed md:inset-y-0 z-[80]  md:w-64 md:bg-card">
                  <Sidebar/>
                </div>
            </aside>
            <svg width="0" height="0">
              <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor="#159957" offset="0%" />
                <stop stopColor="#155799" offset="100%" />
              </linearGradient>
            </svg>   
        </div>

    );
}

export default DashBoardLayout;