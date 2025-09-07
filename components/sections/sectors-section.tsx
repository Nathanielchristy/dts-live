"use client"

import Image from "next/image"
import { motion } from "@/components/ui/motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useState } from "react"

export function SectorsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredSector, setHoveredSector] = useState<number | null>(null)

  const sectors = [
    {
      title: "Events",
      description: "Complete event solutions from scenic fabrication to decorative elements",
      image: "/placeholder.svg?height=500&width=600",
      items: ["Scenic fabrication", "Decoration Elements", "Backdrops"],
      gradient: "from-blue-600/80 via-blue-500/60 to-transparent",
      hoverGradient: "from-blue-900/95 via-blue-800/90 to-blue-600/80",
    },
    {
      title: "Exhibition",
      description: "Professional exhibition solutions with complete stand build-up services",
      image: "/placeholder.svg?height=500&width=600",
      items: ["Stand build up"],
      gradient: "from-green-600/80 via-green-500/60 to-transparent",
      hoverGradient: "from-green-900/95 via-green-800/90 to-green-600/80",
    },
    {
      title: "Interior",
      description: "Comprehensive interior solutions including joinery, partitions, and branding",
      image: "/placeholder.svg?height=500&width=600",
      items: ["Joinery", "Wall partitions", "Texture painting", "Branding / Frosted stickers", "Signage"],
      gradient: "from-purple-600/80 via-purple-500/60 to-transparent",
      hoverGradient: "from-purple-900/95 via-purple-800/90 to-purple-600/80",
    },
    {
      title: "Retail",
      description: "Transform retail spaces with shop front makeovers and strategic displays",
      image: "/placeholder.svg?height=500&width=600",
      items: ["Shop front transformation", "Mall Activations", "Point of sale booths", "Display units", "Signages"],
      gradient: "from-orange-600/80 via-orange-500/60 to-transparent",
      hoverGradient: "from-orange-900/95 via-orange-800/90 to-orange-600/80",
    },
    {
      title: "Real Estate",
      description: "Professional real estate signage solutions and advertising hoardings",
      image: "/placeholder.svg?height=500&width=600",
      items: ["Project signages", "Way finding Signages", "Hoardings"],
      gradient: "from-teal-600/80 via-teal-500/60 to-transparent",
      hoverGradient: "from-teal-900/95 via-teal-800/90 to-teal-600/80",
    },
  ]

  return (
    <section id="sectors" ref={ref} className="w-full py-20 md:py-32 bg-secondary/5 overflow-hidden relative">
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-0 w-96 h-96 rounded-full bg-primary"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 0.05, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute left-20 bottom-20 w-0 h-0 border-l-[60px] border-l-transparent border-b-[104px] border-b-secondary border-r-[60px] border-r-transparent"
      />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Industry Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Sectors We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Delivering specialized solutions across diverse industries with expertise tailored to each sector's unique
            requirements.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              } ${index === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}
              onMouseEnter={() => setHoveredSector(index)}
              onMouseLeave={() => setHoveredSector(null)}
            >
              {/* Background Image */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={sector.image || "/placeholder.svg"}
                  alt={`${sector.title} sector services`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-t ${sector.gradient} transition-all duration-500`} />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${sector.hoverGradient} opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-all duration-500`}
                />

                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                  {/* Top Content */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                      <span className="text-white text-sm font-medium">{sector.title}</span>
                    </div>
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="h-4 w-4 text-white" />
                    </motion.div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-4">
                    {/* Main Title & Description */}
                    <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{sector.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{sector.description}</p>
                    </div>

                    {/* Sub-sectors Container - Always visible on mobile, hover on desktop */}
                    <div
                      className={`transition-all duration-500 ${
                        // Always show on mobile (md and below), show on hover for desktop
                        hoveredSector === index || window.innerWidth < 768
                          ? "opacity-100 translate-y-0 max-h-96"
                          : "opacity-0 translate-y-4 max-h-0 md:max-h-0"
                      } md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0 md:max-h-0 md:group-hover:max-h-96`}
                    >
                      <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/20 p-4 mt-3">
                        <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Our Services
                        </h4>
                        <div className="space-y-2">
                          {sector.items.map((item, itemIndex) => (
                            <motion.div
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                              className="flex items-center gap-2 text-white/95 text-sm bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                            >
                              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                              <span className="font-medium">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mobile-only: Show subsectors by default */}
                    <div className="md:hidden">
                      <div className="bg-black/40 backdrop-blur-md rounded-xl border border-white/20 p-4 mt-3">
                        <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Our Services
                        </h4>
                        <div className="space-y-2">
                          {sector.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-center gap-2 text-white/95 text-sm bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
                            >
                              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                              <span className="font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20.8px] border-b-white/20 border-r-[12px] border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Every sector has unique requirements. Our team specializes in creating tailored solutions that meet your
                specific industry needs.
              </p>
              <motion.button
                className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Discuss Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
