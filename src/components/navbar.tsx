"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Bitcoin, Gift, Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 20 }} className="relative">
            <Bitcoin className="h-6 w-6 text-yellow-500" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -top-1 -right-1 bg-yellow-500 text-black rounded-full p-0.5"
            >
              <Gift className="h-3 w-3" />
            </motion.div>
          </motion.div>
          <span className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">GiftSat</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/" isActive={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/giftSatForm" isActive={pathname === "/giftSatForm"}>
            <Gift className="mr-1 h-4 w-4" />
            Send Gift
          </NavLink>
          <NavLink href="/ussd" isActive={pathname === "/ussd"}>
            <Phone className="mr-1 h-4 w-4" />
            USSD Demo
          </NavLink>

          <ThemeToggle />
          {/* <Button className="bg-yellow-500 text-black hover:bg-yellow-600 ml-2">Get Started</Button> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <MobileNavLink href="/" isActive={pathname === "/"} onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink
                href="/giftSatForm"
                isActive={pathname === "/giftSatForm"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Gift className="mr-2 h-5 w-5" />
                Send Gift
              </MobileNavLink>
              <MobileNavLink
                href="/ussd"
                isActive={pathname === "/ussd"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="mr-2 h-5 w-5" />
                USSD Demo
              </MobileNavLink>

              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 w-full mt-2">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
}

function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center px-1 py-2 text-sm font-medium transition-colors",
        isActive ? "text-yellow-500" : "text-zinc-400 hover:text-white",
      )}
    >
      <span className="flex items-center">{children}</span>
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  )
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void
}

function MobileNavLink({ href, isActive, onClick, children }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center px-2 py-3 text-base font-medium rounded-md transition-colors",
        isActive
          ? "bg-yellow-500/10 text-yellow-500 border-l-2 border-yellow-500"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white",
      )}
    >
      {children}
    </Link>
  )
}
