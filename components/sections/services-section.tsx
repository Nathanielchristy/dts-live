"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Your actual services data with better organization
  const services = [
    {
      title: "Scenic Fabrication",
      description: "Creating immersive environments and stunning visual displays for exhibitions and events.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
        </svg>
      ),
      items: ["Exhibition stands", "Event Elements"],
      color: "from-blue-500/10 to-primary/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Display Units",
      description: "Professional display solutions designed to showcase your products and enhance customer experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="m16 16-3.5-3.5" />
          <path d="M8 16l3.5-3.5" />
        </svg>
      ),
      items: ["Point of sale units", "Acrylic display units", "Metal display units", "Illuminated displays"],
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
    },
    {
      title: "Metal Fabrication",
      description: "Expert metalwork services creating durable and aesthetically pleasing architectural elements.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <path d="M12 2v20" />
          <path d="M8 18V6a4 4 0 0 1 8 0v12" />
          <path d="M8 22h8" />
        </svg>
      ),
      items: ["Metal walls", "Metal Arches", "Metal decoration"],
      color: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      title: "Exterior Transformation",
      description: "Complete exterior makeovers that transform your business facade and create lasting impressions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      ),
      items: ["Shop front ACP cladding", "Shop front decorations"],
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      title: "Custom Signages",
      description: "Bespoke signage solutions that enhance brand visibility and provide clear communication.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
      ),
      items: ["Bespoke 3D letters", "Neon signages", "Way finding signages", "Hoarding Signages"],
      color: "from-teal-500/10 to-cyan-500/10",
      borderColor: "border-teal-500/20",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" ref={ref} className="w-full py-24 md:py-32 bg-gradient-to-b from-background to-secondary/5">
      <div className="container px-4 md:px-6 relative">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver exceptional fabrication and signage solutions that transform spaces
            and elevate your brand presence.
          </p>
        </motion.div>

        {/* Services Grid - Fixed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Service - Scenic Fabrication */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <div className="h-full bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-2xl border border-primary/20 p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-grid-pattern"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-xl">{services[0].icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{services[0].title}</h3>
                    <span className="text-primary font-medium">Featured Service</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed flex-grow">
                  {services[0].description}
                </p>

                {/* Enhanced Sub Points for Featured Service */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Our Specialties
                  </h4>
                  {services[0].items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors duration-300"
                    >
                      <div className="p-2 bg-primary/20 rounded-full">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white group-hover:scale-105 transition-all duration-300 w-full"
                  >
                    <Link href="#contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Services - Regular Grid */}
          {services.slice(1).map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div
                className={`h-full bg-gradient-to-r ${service.color} rounded-xl border ${service.borderColor} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-background rounded-lg shadow-sm flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  {/* Enhanced Sub Points for Regular Services */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">What We Offer:</h4>
                    <div className="grid gap-2">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-3 p-2 bg-background/60 rounded-lg border border-background/80 hover:bg-background/80 transition-colors duration-300"
                        >
                          <div className="p-1 bg-primary/20 rounded-full flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full bg-background/50 hover:bg-background border-border/50 font-medium"
                  >
                    <Link href="#contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary rounded-full translate-x-12 translate-y-12"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Every project is unique. Our team works closely with you to understand your specific requirements and
                deliver tailored solutions that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="#contact">Get a Custom Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  <Link href="#videos">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
