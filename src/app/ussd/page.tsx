"use client"

import React, { useState } from "react"
import { ArrowLeft, ArrowRight, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import Link from "next/link"

const Page = () => {
    const [screen , setScreen] = useState<"dial" | "menu" | "claim" | "balance" | "send" | "convert" | "success">("dial")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [claimCode, setClaimCode] = useState("")
    const [giftDetails, setGiftDetails] = useState<{
        amount:number
        sender: string
        message: string
    } | null>(null)

    const handleDial = () => {
        if(!phoneNumber){
            toast.error("Phone Number Required", {
                description: "Please enter your phone number to continue"
            })
            return
        }

        setScreen("menu")
    }

    const handleClaim = () => {
        if(!claimCode && screen === "claim"){
            toast.error("Claim code required",{
                description: "Please enter the claim code you received",
            })
            return 
        }

        //simulate successful claim
        setGiftDetails({
            amount: 10000,
            sender: "Angie",
            message: "Happy Birthday, Girl!!!!!!1"
        })
        setScreen("success")
    }

    const handleMenuSelection =(option:number) =>{
        switch (option) {
            case 1:
                setScreen("claim")
                break
            case 2:
                setScreen("balance")
                break
            case 3:
                setScreen("send")
                break
            case 4:
                setScreen("convert")
                break
            default:
                setScreen("menu")
        }
    }

    const handleBack =() =>{
        if(screen === "menu"){
            setScreen("dial")
        }else if(["claim", "balance", "send", "convert", "success"].includes(screen)){
            setScreen("menu")
        }
    }
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-4xl font-bold">GiftSat</h1>
                    <p className="text-zinc-400">USSD Simulator - Recipient Experience</p>
                </div>

                <Card className="border-zinc-800 bg-zinc-950">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-yellow-500"/>
                            USSD Interface Simulator
                        </CardTitle>
                        <CardDescription>
                          This simulates what recipients would see on their feature phones when dialing *123#
                        </CardDescription>

                    </CardHeader>

                    <CardContent>
                        <div className="rounded-lg border border-zinc-800 bg-black p-4 font-mono">
                            {screen === "dial" && (
                                <div className="space-y-4">
                                    <p className="text-center text-green-500">Enter *123# to access GiftSat</p>
                                    <div className="flex gap-2">
                                        <Input
                                            value={phoneNumber}
                                            onChange = {(e) => setPhoneNumber(e.target.value)}
                                            placeholder="Your Phone number"
                                            className="border-zinc-800 bg-zinc-900"
                                        />
                                        <Button onClick={handleDial} className="bg-yellow-500 text-black hover:bg-yellow-600">Dial</Button>
                                    </div>
                                </div>
                            )}

                            {screen === "menu" && (
                                <div className="space-y-4">
                                    <div className=" text-green-500">
                                        <p>Welcome to BitGift 🎁</p>
                                        <p>1. Claim Bitcoin Gift</p>
                                        <p>2. Check Balance</p>
                                        <p>3. Send Bitcoin</p>
                                        <p>4. Convert to Airtime</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <Button 
                                            onClick={()=> handleMenuSelection(1)} 
                                            className="border-zinc-800"
                                            variant= "outline"
                                            size="sm"
                                        >
                                            1
                                        </Button>

                                        <Button 
                                            onClick={()=> handleMenuSelection(2)} 
                                            className="border-zinc-800"
                                            variant= "outline"
                                            size="sm"
                                        >
                                            2
                                        </Button>

                                        <Button 
                                            onClick={()=> handleMenuSelection(3)} 
                                            className="border-zinc-800"
                                            variant= "outline"
                                            size="sm"
                                        >
                                            3
                                        </Button>

                                        <Button 
                                            onClick={()=> handleMenuSelection(4)} 
                                            className="border-zinc-800"
                                            variant= "outline"
                                            size="sm"
                                        >
                                            4
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {screen === "claim" && (
                                <div className="space-y-4">
                                    <div className="text-green-500">
                                        <p>Enter your claim code:</p>
                                        <p className="text-xs text-zinc-500">(Or press OK to use auto-detection)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Input
                                            value={claimCode}
                                            onChange = {(e) => setClaimCode(e.target.value)}
                                            placeholder="Claim code"
                                            className="border-zinc-800 bg-zinc-900"
                                        />
                                        <Button onClick={handleClaim} className="bg-yellow-500 text-black hover:bg-yellow-600">OK</Button>
                                    </div>
                                </div>
                            )}

                            {screen === "balance" && (
                                <div className="space-y-4">
                                    <div className="text-green-500">
                                    <p>Your GiftSat Balance:</p>
                                    <p className="text-xl font-bold">15,000 sats</p>
                                    <p className="text-xs text-zinc-500">≈ $9.38 USD</p>
                                    </div>
                                </div>
                            )}

                            {screen === "send" && (
                                <div className="space-y-4">
                                    <div className="text-green-500">
                                        <p>Send Bitcoin</p>
                                        <p>1. Send to phone number</p>
                                        <p>2. Send to Bitcoin address</p>
                                    </div>
                                    <p className="text-xs text-zinc-500">Feature not available in simulator</p>
                                </div>
                            )}

                            {screen === "convert" && (
                                <div className="space-y-4">
                                    <div className="text-green-500">
                                        <p>Convert to Airtime</p>
                                        <p>Available: 15,000 sats</p>
                                        <p>1. Convert 5,000 sats ($3.13)</p>
                                        <p>2. Convert 10,000 sats ($6.25)</p>
                                        <p>3. Convert all</p>
                                    </div>
                                    <p className="text-xs text-zinc-500">Feature not available in simulator</p>
                                </div>
                            )}

                            {screen === "success" && giftDetails && (
                                <div className="space-y-4">
                                    <div className="text-green-500">
                                        <p>Gift claimed successfully!</p>
                                        <p>Amount: {giftDetails.amount.toLocaleString()} sats</p>
                                        <p>From: {giftDetails.sender}</p>
                                        {giftDetails.message && <p>Message: `{giftDetails.message}`</p>}
                                        <p className="mt-2">What would you like to do?</p>
                                        <p>1. Save to wallet</p>
                                        <p>2. Convert to airtime</p>
                                        <p>3. Send to someone else</p>
                                    </div>
                                    <p className="text-xs text-zinc-500">Feature not available in simulator</p>
                                </div>
                            )}

                        </div>
                    </CardContent>

                    <CardFooter className="flex justify-between">
                        {screen !== "dial" && (
                            <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={handleBack} 
                                className="border-zinc-800"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back
                            </Button>
                        )}

                        <div className="ml-auto">
                            <Button asChild className="bg-yellow-500 text-black hover:bg-yellow-600">
                                <Link href="/">
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    Return to Gifter Interface
                                </Link>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </main>
    </>
  )
}

export default Page
