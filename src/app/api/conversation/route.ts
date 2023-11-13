import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY;

export async function POST(req:Request) {
    try{
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;
        // console.log(messages,apiKey)
        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }
        if(!apiKey) {
            return new NextResponse("API key is not configurated, visit https://huggingface.co/ to get key", {status: 500})
        }
        if(!messages){
            return new NextResponse("Inputs are required", {status: 400})   
        }
        const response = await fetch(
            "https://api-inference.huggingface.co/models/google/flan-t5-xxl",
            {
                headers: { "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify({ "inputs": messages }),
            }
        );
        // console.log(response)
        const result = await response.json(); 
        // console.log(result)
        return NextResponse.json(result);
    }catch(error){
        console.log(error);
        return new NextResponse("Internal Server Error", {status: 500}) 
    }
}