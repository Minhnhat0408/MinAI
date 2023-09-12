import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { GiOvermind } from "react-icons/gi";


interface EmptyProps {
    label: string;
}
const poppins = Montserrat({ weight: '800', subsets: ['latin'] });

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative  flex ">
                <div className="relative  mr-4 text-6xl ">
                    <GiOvermind style={{ fill: "url(#blue-gradient)" }} />
                </div>
                <h1 className={cn("text-6xl font-bold super", poppins.className)}>
                    MinAI
                </h1>

            </div>
            <p className="text-muted-foreground text-3xl mt-8 text-center">
                {label}
            </p>
        </div>
    );
};