"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { VideoPlayer } from "@/components/ui/video-player"
import { videos } from "@/config/videos"
import { motion, useScroll, useTransform } from "framer-motion"

export function VideoHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Video Background with Parallax Effect */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <VideoPlayer
          src={videos.hero.src}
          poster={videos.hero.poster}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full"
          overlayColor="bg-secondary/60"
          showControls={false}
        />
      </motion.div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Simplified Geometric Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Large triangle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.15 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute -top-20 -right-20 w-96 h-96"
        >
          <div className="w-full h-full border-[40px] border-primary/20 rounded-3xl transform rotate-45"></div>
        </motion.div>

        {/* Floating triangles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 0.3 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
            className="absolute bottom-40 left-1/4"
            style={{ transform: `translateX(${i * 40}px)` }}
          >
            <div
              className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25.98px] border-b-primary border-r-[15px] border-r-transparent"
              style={{ opacity: 0.5 - i * 0.1 }}
            ></div>
          </motion.div>
        ))}

        {/* Circle element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.2 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full border-4 border-primary/30"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center items-start px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <motion.h1
            className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Scenic Fabrication &</span>
            <span className="block text-primary relative">
              Custom Signage Solutions
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="max-w-[700px] text-xl md:text-2xl text-gray-200 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From exhibition stands to custom signage, we transform spaces and create memorable experiences across the
            UAE.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-20 sm:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              <Link href="#contact">
                Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              const servicesSection = document.getElementById("services")
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/50"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 1 }}
            >
              <ChevronDown className="h-5 w-5 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
