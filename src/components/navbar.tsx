"use client"

import React from 'react'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bitcoin, Gift, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"



const Navbar = () => {
    const pathname = usePathname();
  return (
    <>
      <header className='border-b border-zinc-800 bg-zinc-950'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
            <div className='flex items-center gap-2'>
                <Bitcoin className="h-6 w-6 text-yellow-500"/>
                <span className='text-xl font-bold text-white'> GiftSat</span>
            </div>

            <nav className='flex items-center gap-4'>
                <Button
                    variant={pathname === "/"? "default": "ghost"}
                    size ="sm"
                    asChild
                    className = {pathname === "/" ? "bg-yellow-500 text-black hover:bg-yellow-600":"text-zinc-400"}
                >
                    <Link href="/">
                        <Gift className="mr-2 h-4 w-4"/>
                        Send Gift
                    </Link>
                </Button>

                <Button
                    variant={pathname === "/ussd-simulator"? "default": "ghost"}
                    size ="sm"
                    asChild
                    className = {pathname === "/ussd-simulator" ? "bg-yellow-500 text-black hover:bg-yellow-600":"text-zinc-400"}
                >
                    <Link href="/ussd-simulator">
                        <Phone className="mr-2 h-4 w-4"/>
                        USSD Simulator
                    </Link>
                </Button>
            </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
