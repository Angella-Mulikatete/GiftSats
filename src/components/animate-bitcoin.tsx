"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Bitcoin, Gift } from "lucide-react"

export function AnimatedBitcoin() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      container.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-32 h-32 transition-transform duration-200 ease-out">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 2,
        }}
        className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"
      />

      <motion.div
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Bitcoin className="h-24 w-24 text-yellow-500" />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 2,
        }}
        className="absolute top-0 right-0 bg-yellow-500 text-black rounded-full p-2"
      >
        <Gift className="h-8 w-8" />
      </motion.div>
    </div>
  )
}
