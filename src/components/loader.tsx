// import Image from "next/image"   
import { GiOvermind } from "react-icons/gi";

export const Loader = () => {
    return (
        <div className="p-10 w-full flex flex-col gap-y-4 items-center bg-muted justify-center ">
            <div className="w-8 h-8 relative flex justify-center items-center animate-spin text-[24px]">
                <GiOvermind style={{ fill: "url(#blue-gradient)" }} />
            </div>
            <p className="text-sm text-muted-foreground">
                MinAI is thinking...
            </p>
        </div>
    );
};