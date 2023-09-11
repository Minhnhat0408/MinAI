import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type HeadingProps = {
    title: string,
    description: string,
    icon: LucideIcon,
    iconColor?: string,
    bgColor?: string,
}

function Heading({ title, description, icon: Icon, iconColor, bgColor }: HeadingProps) {
    return (
        <section className="px-4 lg:px-8 flex items-center gap-x-3  mb-8">
            <div className={cn("p-2 w-fit rounded-sm", bgColor)}>
                <Icon className={cn("w-10 h-10", iconColor)} />
            </div>
            <div>
                <h2 className="text-3xl font-bold super">
                    {title}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </section>
    );
}

export default Heading;