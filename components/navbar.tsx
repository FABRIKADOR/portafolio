"use client"

import Link from "next/link"
import { itemsNavbar } from "./navigation"
import { MotionTransition } from "./transition-component"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import type React from "react"

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMobileMenuOpen(false)
    router.push(href)
  }

  return (
    <>
      <MotionTransition
        position="top"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-500 pointer-events-none",
          isScrolled 
            ? "bg-black/50 backdrop-blur-md border-b border-white/10" 
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto pointer-events-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50" onClick={(e) => handleNavigation(e, "/")}>
              <motion.h1
                className="text-4xl font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                El<span className="text-[#00BFFF]">Fabrikador</span>
              </motion.h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
              {itemsNavbar.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.link}
                    onClick={(e) => handleNavigation(e, item.link)}
                    className={cn(
                      "relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300",
                      pathname === item.link 
                        ? "text-white bg-white/20 shadow-lg" 
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <motion.span
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      className="relative z-10"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-sm font-medium relative z-10">{item.title}</span>
                  </Link>

                  {/* Active indicator */}
                  {pathname === item.link && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-white/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </MotionTransition>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-4 right-4 z-40 rounded-2xl bg-gray-900/90 backdrop-blur-lg border border-white/10 shadow-2xl"
            >
              <div className="p-4 space-y-2">
                {itemsNavbar.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: item.id * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      onClick={(e) => handleNavigation(e, item.link)}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-xl transition-all duration-300",
                        pathname === item.link
                          ? "bg-white/20 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
