"use client"
import Heading from "@/components/heading";
import { Download, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";

import { Loader } from "@/components/loader";
import { Empty } from "@/components/empty";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
function ImageGenPage() {
    const router = useRouter();
    const [photos, setPhotos] = useState<string>('');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        },

    })
    // const [img, setImg] = useState('')
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setPhotos('');
            const apikey = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY;

            const response = await fetch(
                "https://api-inference.huggingface.co/models/SG161222/Realistic_Vision_V1.4",
                {
                    headers: { Authorization: `Bearer ${apikey}` },
                    method: "POST",
                    body: JSON.stringify({ "inputs": values.prompt }),
                }
            );
            const result = await response.blob();
     
            setPhotos(URL.createObjectURL(result));
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
                title="Image Generation"
                description="Turn your prompt into an image."
                icon={ImageIcon}
                iconColor="text-pink-700"
                bgColor="bg-pink-700/10"
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
                                        <Input {...field} placeholder="A majestic lion jumping from a big stone at night" disabled={isLoading} className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent" />
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

            {photos === '' && !isLoading && (
                <Empty label="No Image Generated yet." />
            )}
            <div className="flex justify-center mt-8">
                {
                    photos !== '' && (
                        <Card key={photos} className="rounded-lg overflow-hidden">
                            <div className="relative aspect-square ">
                                <Image
                                
                                    alt="Generated"
                                    src={photos}
                            
                                    height={512}
                                    width={512}
                                />
                            </div>
                            <CardFooter className="p-2">
                                <Button onClick={() => window.open(photos)} variant="secondary" className="w-full">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download
                                </Button>
                            </CardFooter>
                        </Card>)

                }

            </div>

        </section >
    );
}

export default ImageGenPage;