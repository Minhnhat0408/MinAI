import { NextResponse } from "next/server";

const apiKey = process.env.CHATGPT_API_KEY;

export async function GET() {
    try{
        const response = await fetch(
            "https://api.pawan.krd/info",
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
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