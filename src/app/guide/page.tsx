import React from 'react'

import { ArrowRight, Phone, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

const Page = () => {
  return (
    <>
        <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-3xl">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold">How GiftSat Works</h1>
                        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
                        GiftSat makes it easy to send Bitcoin to anyone with a phone, even if they do not have a wallet or smartphone.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="border-zinc-800 bg-zinc-950">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Smartphone className="h-5 w-5 text-yellow-500" />
                                    For Gifters
                                </CardTitle>
                                <CardDescription>How to send a Bitcoin gift</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                                    1
                                    </div>
                                    <div>
                                    <p className="font-medium">Visit BitGift web app</p>
                                    <p className="text-sm text-zinc-400">Access our user-friendly interface</p>
                                    </div>
                                </div>
                                </div>

                                <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                                    2
                                    </div>
                                    <div>
                                    <p className="font-medium">Enter recipient details</p>
                                    <p className="text-sm text-zinc-400">Name, phone number, amount, and optional message</p>
                                    </div>
                                </div>
                                </div>

                                <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                                    3
                                    </div>
                                    <div>
                                    <p className="font-medium">Pay via Lightning</p>
                                    <p className="text-sm text-zinc-400">Use LNBits, Alby, or any Lightning wallet</p>
                                    </div>
                                </div>
                                </div>

                                <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                                    4
                                    </div>
                                    <div>
                                    <p className="font-medium">Recipient gets notified</p>
                                    <p className="text-sm text-zinc-400">An SMS is sent with claim instructions</p>
                                    </div>
                                </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-zinc-800 bg-zinc-950">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-yellow-500" />
                                For Recipients
                                </CardTitle>
                                <CardDescription>How to claim your Bitcoin gift</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                                            1
                                        </div>
                                        <div>
                                            <p className="font-medium">Receive SMS notification</p>
                                            <p className="text-sm text-zinc-400"> You have received a Bitcoin gift! Dial *123# to claim.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                                            2
                                        </div>
                                        <div>
                                            <p className="font-medium">Dial *123# USSD code</p>
                                            <p className="text-sm text-zinc-400">Works on any phone, even feature phones</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                                            3
                                        </div>
                                        <div>
                                            <p className="font-medium">Select Claim Bitcoin Gift option</p>
                                            <p className="text-sm text-zinc-400">Enter code or use auto-detection</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                                            4
                                        </div>
                                        <div>
                                            <p className="font-medium">Choose what to do with your Bitcoin</p>
                                            <p className="text-sm text-zinc-400">Save to wallet, convert to airtime, or send to others</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 font-medium text-black transition-colors hover:bg-yellow-600"
                        >
                            Try It Now
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Page
