"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MessageCircle, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer ref={ref} className="w-full border-t py-12 bg-secondary/5 relative overflow-hidden">
      {/* Decorative elements inspired by logo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 0.05, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[86.6px] border-b-primary/20 border-r-[50px] border-r-transparent -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 lg:col-span-1"
        >
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Dates Technical Service Logo" width={40} height={40} className="w-auto h-8" />
            <h3 className="text-lg font-bold">Dates Technical</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Leading provider of scenic fabrication, custom signage, and metal fabrication solutions across the UAE.
            Transforming spaces with precision and creativity.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/datestech/" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://wa.me/971586912712" className="text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link href="https://www.linkedin.com/company/dates-technical-service-llc/posts/?feedView=all" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Scenic Fabrication
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Display Units
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Metal Fabrication
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Exterior Transformation
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Custom Signages
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold">Specialties</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Exhibition Stands
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Bespoke 3D Letters
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Neon Signages
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ACP Cladding
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Illuminated Displays
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">United Arab Emirates</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <a
                href="mailto:project@datestech.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                project@datestech.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <a
                href="tel:+971 04 45998047"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +971 04 4599804
              </a>
            </li>
            ß<li className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <a
                href="tel:+971 58 691 2712"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +971 58 691 2712
              </a>
            </li>
          </ul>

          {/* Quick Links */}
          <div className="pt-4">
            <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="#videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Video Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mt-8 pt-8 border-t"
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Dates Technical Service. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Get Quote
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 pt-6 border-t border-border/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <h4 className="text-sm font-semibold text-primary mb-1">Quality Assured</h4>
              <p className="text-xs text-muted-foreground">Premium materials and expert craftsmanship</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-1">UAE Wide Service</h4>
              <p className="text-xs text-muted-foreground">Serving clients across the Emirates</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-1">Custom Solutions</h4>
              <p className="text-xs text-muted-foreground">Tailored to your specific requirements</p>
            </div>
          </div>
        </motion.div> */}
      </motion.div>
    </footer>
  )
}
