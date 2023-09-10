import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

function NavBar() {
    return (
        <div className="flex items-center p-4">
            <div className="flex w-full ">
                <UserButton afterSignOutUrl="/" />
            </div>
            <MobileSidebar />
        </div>
    );
}

export default NavBar;