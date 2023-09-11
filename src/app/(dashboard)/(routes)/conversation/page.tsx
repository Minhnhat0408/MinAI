"use client"
import Heading from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod"
import axios from "axios";
import { Message, formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/empty";
function ConversationPage() {
    const router = useRouter();
    const [messages, setMessages] = useState<Message[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        },

    })
    // const [img, setImg] = useState('')
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // console.log(values);

        // async function query(data : {'inputs':string}) {
        //     const response = await fetch(
        //         "https://api-inference.huggingface.co/models/SG161222/Realistic_Vision_V1.4",
        //         {
        //             headers: { Authorization: "Bearer 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" },
        //             method: "POST",
        //             body: JSON.stringify(data),
        //         }
        //     );
        //     const result = await response.blob();
        //     return result;
        // }
        try {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
            const userMessage: Message = {
                role: "user",
                content: values.prompt,
            }
            const newMessages = [...messages, userMessage]
            setMessages(newMessages)
            // console.log(newMessages)
            const response = await axios.post("/api/conversation", {
                messages: newMessages,
            })
        
            const resMsg: Message = response.data.choices[0].message
            let endIndex = resMsg.content.indexOf("END");
            let noteIndex = resMsg.content.indexOf("(Note");

            if (endIndex !== -1) {
                resMsg.content = resMsg.content.substring(0, endIndex).trim();
            }
            if (noteIndex !== -1 && noteIndex < endIndex) {
                resMsg.content = resMsg.content.substring(0, noteIndex).trim();
            }
            setMessages((current: Message[]) => [...current, response.data.choices[0].message])
            form.reset()
        } catch (error) {
            console.log(error)
        } finally {
            router.refresh()
        }
    }

    return (
        <section>
            <Heading
                title="Conversation"
                description="Our testing conversation model"
                icon={MessageSquare}
                iconColor="text-violet-500"
                bg-bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8 z-10 sticky top-0 bg-background ">
                <Form {...form} >
                    <form onSubmit={
                        form.handleSubmit(onSubmit)
                    }
                        className="rouded-lg border-2 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                        <FormField
                            name="prompt"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                        <Input {...field} placeholder="How do I calculate the radius of a circle" disabled={isLoading} className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent" />
                                    </FormControl>
                                </FormItem>
                            )} />
                        <Button type="submit" disabled={isLoading} size="icon" className="col-span-12 lg:col-span-2 w-full hover:bg-card hover:text-card-foreground">
                            Generate
                        </Button>
                    </form>
                </Form>
            </div>
            {isLoading && (
                <div className="mt-4 rounded-lg w-full flex items-center justify-center px-4 lg:px-8">
                    <Loader />
                </div>
            )}
           
            {messages.length === 0 && !isLoading && (
                <Empty label="No conversation started." />
            )}
            <div className="space-y-4    mt-4 px-4 lg:px-8">
                <div className="flex flex-col-reverse gap-y-4">
                    {messages.map((message: Message) => (
                        <div
                            key={message.content}
                            className={cn(
                                "p-8 w-full flex items-start gap-x-8 rounded-lg",
                                message.role === "user" ? "bg-white border border-black/10" : "bg-card",
                            )}
                        >
                            {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                            <p className="text-sm">
                                {message.content}
                            </p>
                        </div>))}
                </div>
            </div>

        </section >
    );
}

export default ConversationPage;