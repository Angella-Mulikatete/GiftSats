import React from 'react'

import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Page = () => {
  return (
    <>
        <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="mx-auto max-w-md">
                    <Card className="border-zinc-800 bg-zinc-950">
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                                <CheckCircle className="h-10 w-10 text-green-500" />
                            </div>
                            <CardTitle className="text-2xl">Gift Sent Successfully!</CardTitle>
                            <CardDescription>Your Bitcoin gift is on its way</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <div className="mb-6 rounded-lg bg-zinc-900 p-4">
                                <p className="mb-2 text-sm text-zinc-400">Recipient will receive an SMS:</p>
                                <p className="text-md font-medium">You have received a Bitcoin gift! Dial *123# to claim.</p>
                            </div>
                            <div className="space-y-2 text-sm text-zinc-400">
                                <p>Transaction ID: 8f4d9c2e1a7b6...</p>
                                <p>Amount: 10,000 sats</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-2">
                            <Button asChild className="w-full bg-yellow-500 text-black hover:bg-yellow-600">
                                <Link href="/">Send Another Gift</Link>
                            </Button>
                            <Button variant="outline" className="w-full border-zinc-800">
                                View Transaction Details
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </main>
    </>
  )
}

export default Page
