import { NextResponse } from "next/server";

const apiKey = process.env.CHATGPT_API_KEY;

export async function POST(req:Request) {
    try{
        const body = await req.json();

        const response = await fetch(
            "https://api.pawan.krd/resetip",
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify(body),
            }   
        );
        const result = await response.json(); 
        return NextResponse.json(result);
    }catch(error){
        console.log(error);
        return new NextResponse("Internal Server Error", {status: 500}) 
    }
}