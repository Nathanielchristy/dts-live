"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="w-full py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 w-96 h-96 bg-secondary rounded-full -translate-y-1/2 translate-x-1/2"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-20 bottom-20 w-0 h-0 border-l-[50px] border-l-transparent border-b-[86.6px] border-b-primary border-r-[50px] border-r-transparent"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Based in the UAE, we specialize in scenic fabrication, custom signage, and metal fabrication. Our team
                of skilled craftsmen and designers creates innovative solutions that transform spaces and enhance brand
                visibility.
              </p>
            </div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold">Our Expertise</h3>
              <p className="text-muted-foreground">
                From exhibition stands and display units to exterior transformations and bespoke signage, we deliver
                comprehensive fabrication solutions with precision, creativity, and reliability.
              </p>
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To help brands stand out and create memorable environments through exceptional craftsmanship, innovative
                design, and superior quality fabrication services.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                <Link href="#contact">Work With Us</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                className="absolute -inset-4 border-2 border-primary/20 -z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.div
                className="absolute -inset-1 border-2 border-secondary/20 -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <Image
                src="/logo-about.jpg"
                width={550}
                height={550}
                alt="Dates Technical Service team working on scenic fabrication and custom signage"
                className="object-cover shadow-lg"
              />
              {/* Triangle accent */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-0 h-0 border-l-[20px] border-l-transparent border-b-[34.6px] border-b-primary border-r-[20px] border-r-transparent"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
