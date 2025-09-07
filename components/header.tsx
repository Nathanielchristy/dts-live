"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Updated navigation items - removed Testimonials
  const navItems = ["Services", "About", "Gallery", "Videos", "Contact"]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Dates Technical Service Logo" width={40} height={40} className="w-auto h-8" />
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-secondary" : "text-white"
              }`}
            >
              Dates Technical
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Button
            asChild
            className={`hidden md:flex transition-all duration-300 hover:scale-105 ${
              !isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            <Link href="#contact">Get a Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-b"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground text-lg font-medium block py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button
                asChild
                className="w-full mt-2 bg-primary hover:bg-primary/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
