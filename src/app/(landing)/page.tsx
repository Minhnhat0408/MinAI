import { LandingNavbar } from "@/components/LandingPage/landing-navbar";
import { LandingHero } from "@/components/LandingPage/landing-hero";
import { LandingContent } from "@/components/LandingPage/landing-content";

const LandingPage = () => {
    return (
        <div className="h-full ">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
   
        </div>
    );
}

export default LandingPage;