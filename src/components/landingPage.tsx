"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bitcoin, Gift, Phone, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 p-4 bg-white/50 dark:bg-zinc-900/50 rounded-full border border-zinc-200 dark:border-zinc-800"
            >
              <div className="relative">
                <Bitcoin className="h-16 w-16 text-yellow-500" />
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full p-1"
                >
                  <Gift className="h-5 w-5" />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-yellow-500 dark:from-white dark:to-yellow-500"
            >
              GiftSat
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl font-light mb-6 text-zinc-700 dark:text-zinc-300"
            >
              Send Bitcoin gifts to anyone with a phone
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8"
            >
              No wallet? No problem. GiftSat makes it easy to send Bitcoin to anyone with a phone, even if they do not
              have a wallet or smartphone.
            </motion.p>

            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-600 transition-all duration-300 hover:scale-105"
              >
                <Link href="/giftSatForm">
                  Send a Gift
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
              >
                <Link href="/ussd">
                  Try USSD Simulator
                  <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div> */}
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
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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

            {/* <motion.div
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
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-40 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GiftSat?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              GiftSat bridges the gap between Bitcoin and traditional mobile users, making Bitcoin accessible to
              everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Gift className="h-8 w-8 text-yellow-500" />,
                title: "No Wallet Required",
                description: "Recipients don't need a Bitcoin wallet or any prior experience.",
              },
              {
                icon: <Phone className="h-8 w-8 text-yellow-500" />,
                title: "Works on Any Phone",
                description: "Compatible with feature phones through USSD, not just smartphones.",
              },
              {
                icon: <Bitcoin className="h-8 w-8 text-yellow-500" />,
                title: "Instant Delivery",
                description: "Lightning-fast Bitcoin transfers with minimal fees.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="bg-zinc-100/50 dark:bg-zinc-800/50 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Send Your First Bitcoin Gift?</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Join the future of digital gifting. No technical knowledge required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600">
                  <Link href="/giftSatForm">
                    Send a Gift Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10"
                >
                  <Link href="/ussd">
                    Try USSD Demo
                    <Phone className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
