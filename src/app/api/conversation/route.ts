import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const apiKey = process.env.CHATGPT_API_KEY;

export async function POST(req:Request) {
    try{
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;
        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }
        if(!apiKey) {
            return new NextResponse("ChatGPT key is not configurated, visit https://discord.pawan.krd to get key", {status: 500})
        }
        if(!messages){
            return new NextResponse("Messages are required", {status: 400})   
        }
        const response = await fetch(
            "https://api.pawan.krd/v1/chat/completions",
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },

                method: "POST",
                body: JSON.stringify({
                    "model": "pai-001-light-beta",
                    "max_tokens": 100,
                    "messages":messages
                })
            }
        );
        const result = await response.json(); 
        console.log(result)
        return NextResponse.json(result);
    }catch(error){
        console.log(error);
        return new NextResponse("Internal Server Error", {status: 500}) 
    }
}