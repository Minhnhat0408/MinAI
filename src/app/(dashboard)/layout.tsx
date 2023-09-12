import NavBar from "@/components/navbar";
import { Sidebar } from "@/components/SideBar/sidebar";
import React from "react";

function DashBoardLayout(
    {
        children
    }: { children: React.ReactNode }
) {
    return (
        <div className="flex">
            <main className=" w-full md:pr-72"><NavBar/>{children}</main>
            <aside className="h-full relative">
                <div className="hidden h-full  md:flex md:right-0 md:flex-col md:fixed md:inset-y-0 z-[80]  md:w-72 md:bg-card">
                  <Sidebar/>
                </div>
            </aside>  
        </div>

    );
}

export default DashBoardLayout;