"use client"
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

function MobileSidebar() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    },[])
    if(!isMounted) {
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger >
                <Button variant={"ghost"} size={"icon"} className="md:hidden justify-end" >
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="p-0 w-56">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;