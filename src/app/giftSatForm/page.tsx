/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, {useState} from 'react'
import { toast } from "sonner"
import { Gift, Send } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { PaymentModal } from "../../components/paymentModel"
//import { setTimeout } from 'timers/promises'

export default function Page() {
    const [isLoading, setIsLoading] =  useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [formData, setFormData] = useState({
        recipientName: "",
        phoneNumber: "",
        amount: "",
        message: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]:value}))
    }

    const handleSubmit = async (e: React.FormEvent) =>{
      e.preventDefault()
      setIsLoading(true);

      //validate Form
      if(!formData.recipientName || !formData.phoneNumber || !formData.amount){
        toast.error("Missing Information", {
          description: "Please fill in all required fields"
        })
        setIsLoading(false)
        return
      }

      //show payment modal instead of submitting directly
      setShowPaymentModal(true)
      setIsLoading(false)
    }

    const handlePaymentComplete = async()=>{
      setShowPaymentModal(false)
      setIsLoading(true)

      try{
        //replace with actual api call
        await new Promise((resolve) => setTimeout(resolve, 15000))

        toast.success("Gift sent successfully", {
          description: `${formData.recipientName} will receive an sms with instructions to claim their Bitcoin gift`
        })

        //reset form
        setFormData({
          recipientName: "",
          phoneNumber: "",
          amount: "",
          message: "",
        })
      }catch(error){
          toast.error("Error sending gift", {
          description: "There was a problem sending your gift. Please try again."
        })
      } finally {
        setIsLoading(false)
      }

      
    }

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white"'>
        <div className="container mx-auto px-4 py-24">
          <div className='mx-auto max-w-md'>
            <Card className='border-zinc-800 bg-zinc-950'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Gift className='h-5 w-5 text-yellow-500'/>
                  Send a Bitcoin Gift
                </CardTitle>
                <CardDescription>The recipient will get an SMS with instructions to claim their gift. </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className='space-y-4'>
                  <div className='space-y-2'>
                    <label htmlFor="recipientName">Recipient Name</label>
                    <Input
                      id = "recipientName"
                      name = "recipientName"
                      placeholder = "Your Name ..."
                      value = {formData.recipientName}
                      onChange={handleChange}
                      className='border-zinc-800 bg-zinc-900'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Input
                      id = "phoneNumber"
                      name = "phoneNumber"
                      placeholder = "+25670....."
                      value = {formData.phoneNumber}
                      onChange={handleChange}
                      className='border-zinc-800 bg-zinc-900'
                    />
                    <p className='text-xs text-zinc-500'>Include Country code(eg,, +256 for Uganda)</p>
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor="recipientName">Amount(sats)</label>
                    <Input
                      id = "amount"
                      name = "amount"
                      placeholder = "10000"
                      value = {formData.amount}
                      onChange={handleChange}
                      className='border-zinc-800 bg-zinc-900'
                    />
                    <p className='border-zinc-800 bg-zinc-900'>1 ugx = 1 sat</p>
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor="recipientName">Message(Optional)</label>
                    <Textarea
                      id = "message"
                      name = "message"
                      placeholder = "Happy Birthday!!!"
                      value = {formData.message}
                      onChange={handleChange}
                      className='border-zinc-800 bg-zinc-900'
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type='submit' className='w-full bg-yellow-500 text-black hover:bg-yellow-600' disabled={isLoading}>
                    {isLoading ? (
                      <div className='flex items-center gap-2'>
                        <div className='h-4 w-4 animate-spin round-full border-2 border-zinc-900 border-t-transparent'></div>
                        Processing....
                      </div>
                    ): (
                      <div className='flex items-center gap-2'>
                        <Send className='h-4 w-4'/>
                        Send Gift
                      </div>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <PaymentModal
              isOpen = {showPaymentModal}
              onClose ={()=> setShowPaymentModal(false)}
              onComplete ={handlePaymentComplete}
              amount = {formData.amount}
            />
          </div>
        </div>
      </div>
     
    </>
  )
}


