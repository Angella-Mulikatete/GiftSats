import React from 'react'

import { ArrowRight, Phone, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { motion } from "framer-motion"


const Guide = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl">
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-3xl md:text-4xl font-bold">How GiftSat Works</h2>
                        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                            GiftSat makes it easy to send Bitcoin to anyone with a phone, even if they do not have a wallet or
                            smartphone.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2">
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                <Smartphone className="h-5 w-5 text-yellow-500" />
                                For Gifters
                                </CardTitle>
                                <CardDescription>How to send a Bitcoin gift</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                { step: 1, title: "Visit GiftSat web app", desc: "Access our user-friendly interface" },
                                {
                                    step: 2,
                                    title: "Enter recipient details",
                                    desc: "Name, phone number, amount, and optional message",
                                },
                                { step: 3, title: "Pay via Lightning", desc: "Use LNBits, Alby, or any Lightning wallet" },
                                { step: 4, title: "Recipient gets notified", desc: "An SMS is sent with claim instructions" },
                                ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="space-y-2"
                                >
                                    <div className="flex items-start gap-3 group">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black"
                                    >
                                        {item.step}
                                    </motion.div>
                                    <div>
                                        <p className="font-medium group-hover:text-yellow-500 transition-colors">{item.title}</p>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                                    </div>
                                    </div>
                                </motion.div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-yellow-500" />
                            For Recipients
                            </CardTitle>
                            <CardDescription>How to claim your Bitcoin gift</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                            {
                                step: 1,
                                title: "Receive SMS notification",
                                desc: "You have received a Bitcoin gift! Dial *123# to claim.",
                            },
                            { step: 2, title: "Dial *123# USSD code", desc: "Works on any phone, even feature phones" },
                            { step: 3, title: "Select Claim Bitcoin Gift option", desc: "Enter code or use auto-detection" },
                            {
                                step: 4,
                                title: "Choose what to do with your Bitcoin",
                                desc: "Save to wallet, convert to airtime, or send to others",
                            },
                            ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="space-y-2"
                            >
                                <div className="flex items-start gap-3 group">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black"
                                >
                                    {item.step}
                                </motion.div>
                                <div>
                                    <p className="font-medium group-hover:text-yellow-500 transition-colors">{item.title}</p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                                </div>
                                </div>
                            </motion.div>
                            ))}
                        </CardContent>
                        </Card>
                    </motion.div>
                    </div>

                    <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 flex justify-center"
                    >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                        href="/giftSatForm"
                        className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-6 py-3 font-medium text-black transition-colors hover:bg-yellow-600"
                        >
                        Try It Now
                        <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>
                    </motion.div>
                </div>
            </div>  
        </section>
    </main>
  )
}

export default Guide
