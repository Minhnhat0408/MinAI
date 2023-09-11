import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./SideBar/mobile-sidebar";

function NavBar() {
    return (
        <header className="flex items-center p-4 pl-10 pt-10">
            <div className="flex w-full ">
                <UserButton appearance={{
                    elements:{
                        
                        userButtonAvatarBox:"w-12 h-12 rounded-full bg-card-foreground",
                        userButtonPopoverCard:"text-card py-4 w-56",    
                        userButtonPopoverActionButton:"text-card hover:text-primary p-2",   
                        userButtonPopoverFooter:"hidden ",  
                        userPreview:'px-4 ',
                        userPreviewAvatarBox:'w-8 h-8 rounded-full bg-card-foreground',
                    }
                }} afterSignOutUrl="/" />
            </div>          
            <MobileSidebar />
        </header>
    );
}

export default NavBar;