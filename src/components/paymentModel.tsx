"use client"

import React, { useState } from "react"
import { Bitcoin, X, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (method: string)=> void
  amount: string
}

export function PaymentModal ({isOpen, onClose, onComplete, amount}: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState("1nbits")

  const handlePayment = async() =>{
    setIsProcessing(true)

    //simulating payment Processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    onComplete(activeTab)
  }

  //mock invoice for demo
   const invoice =
    "lnbc100n1p3hum2dpp5qqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqqqsyqcyq5rqwzqfqypqdpl2pkx2ctnv5sxxmmwwd5kgetjypeh2ursdae8g"


  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md border-zinc-800 bg-zinc-950 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bitcoin className="h-5 w-5 text-yellow-500"/>
              Pay with Lightning
            </DialogTitle>
            <DialogDescription>Send {amount || "0"} sats to complete your gift</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="1nbits" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-zinc-900">
              <TabsTrigger value="1nbits">LNBits</TabsTrigger>
              <TabsTrigger value="alby">Alby</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            <TabsContent value="lnbits" className="mt-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg">
                {/* This would be a QR code in a real implementation */}
                <div className="h-48 w-48 bg-black grid place-items-center">
                  <Zap className="h-16 w-16 text-yellow-500" />
                </div>
              </div>
              <div className="text-xs text-zinc-400 max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
                {invoice}
              </div>
              <Button
                variant="outline"
                className="w-full border-zinc-700"
                onClick={() => {
                  navigator.clipboard.writeText(invoice)
                }}
              >
                Copy Invoice
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="alby" className="mt-4">
            <div className="flex flex-col items-center space-y-4">
              <Button
                className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                onClick={() => {
                  // In a real implementation, this would open Alby
                  handlePayment()
                }}
              >
                Pay with Alby Extension
              </Button>
              <p className="text-sm text-zinc-400">Make sure you have the Alby browser extension installed</p>
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg">
                {/* This would be a QR code in a real implementation */}
                <div className="h-48 w-48 bg-black grid place-items-center">
                  <Zap className="h-16 w-16 text-yellow-500" />
                </div>
              </div>
              <div className="text-xs text-zinc-400 max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
                {invoice}
              </div>
              <Button
                variant="outline"
                className="w-full border-zinc-700"
                onClick={() => {
                  navigator.clipboard.writeText(invoice)
                }}
              >
                Copy Invoice
              </Button>
            </div>
          </TabsContent>
     

          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between">
            <Button variant="ghost" onClick={onClose} className="mb-2 sm:mb-0">
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>

            <Button
              onClick={handlePayment}
              className="bg-yellow-500 text-black hover:bg-yellow-600"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-900 border-t-transparent"></div>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Confirm Payment
                </div>
              )}
            </Button>
          </DialogFooter>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}


