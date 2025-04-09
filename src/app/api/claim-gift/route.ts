import { NextResponse } from "next/server";

//integrate this with the ussd service

export async function POST(request: Request){
    try{
        const body = await request.json()
        const {code, phoneNumber} = body

        //validate input
        if(!code || !phoneNumber){
            return NextResponse.json({error: "Missing required fields"}, {status: 400})
        }

        // In a real implementation:
        // 1. Verify the claim code
        // 2. Check if gift exists and is unclaimed
        // 3. Mark gift as claimed
        // 4. Return gift details

        //Mock successful Response
        return NextResponse.json({
            success:true,
            amount:10000,
            sender: "Angie",
            message: "Happy Birthday, Angie!",
            options: [
                { id: "wallet", label: "Save to wallet" },
                { id: "airtime", label: "Convert to airtime" },
                { id: "send", label: "Send to someone else" },
            ],
        })
    }catch(error){
        console.error("Error claiming gift:", error)
        return NextResponse.json({ error: "Failed to claim gift" }, { status: 500 })
    }
}