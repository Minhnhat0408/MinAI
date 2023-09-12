import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const apiKey = process.env.HUGGINGFACE_API_KEY;

export async function POST(req:Request) {
    try{
        const {userId} = auth();
        const body = await req.json();
        const {inputs} = body;
        const headers = new Headers();
        console.log(inputs)
        headers.set("Content-Type", "image/*");
        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }
        if(!apiKey) {
            return new NextResponse("API key is not configurated, visit https://huggingface.co/ to get key", {status: 500})
        }
        if(!inputs){
            return new NextResponse("Inputs are required", {status: 400})   
        }
 
        const response = await fetch(
            "https://api-inference.huggingface.co/models/SG161222/Realistic_Vision_V1.4",
            {
                headers: { Authorization: `Bearer ${apiKey}` },
                method: "POST",
                body: JSON.stringify(body),
            }
        );
        const result = await response.blob();
        // const img  = { url: URL.createObjectURL(result)}
        return new NextResponse(result, {headers});
    }catch(error){
        console.log(error);
        return new NextResponse("Internal Server Error", {status: 500}) 
    }
}