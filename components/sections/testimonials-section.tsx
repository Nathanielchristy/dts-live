"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

// Testimonial data - replace with your actual testimonials
const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    role: "Event Manager",
    company: "Dubai Events LLC",
    image: "/videos/posters/testimonial-1-poster.jpg", // Replace with actual client photo
    quote:
      "Dates Technical Service delivered exceptional custom signage for our international conference. Their attention to detail and ability to work under tight deadlines was impressive. The quality of their work exceeded our expectations.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "Innovative Exhibitions",
    image: "/videos/posters/testimonial-2-poster.jpg", // Replace with actual client photo
    quote:
      "We've worked with Dates Technical on multiple exhibition stands, and they consistently deliver outstanding results. Their joinery work is precise, durable, and always receives compliments from our clients. A true partner for our creative projects.",
  },
  {
    id: 3,
    name: "Mohammed Al Qasimi",
    role: "Facilities Manager",
    company: "Gulf Corporate Tower",
    image: "/placeholder.svg?height=400&width=400", // Replace with actual client photo
    quote:
      "The corporate signage installed by Dates Technical has transformed our office environment. Their team was professional from design to installation, and the quality of materials used ensures our investment will last for years to come.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    // Reset animation state after a short delay
    setTimeout(() => setIsAnimating(false), 300)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    // Reset animation state after a short delay
    setTimeout(() => setIsAnimating(false), 300)
  }

  useEffect(() => {
    // Auto-advance testimonials every 10 seconds (increased from 8)
    const interval = setInterval(() => {
      nextTestimonial()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  // Simplified animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="testimonials" ref={ref} className="w-full py-20 md:py-32 bg-secondary/5 relative overflow-hidden">
      {/* Simplified decorative elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-20 bottom-20 w-0 h-0 border-l-[40px] border-l-transparent border-b-[69.3px] border-b-primary/10 border-r-[40px] border-r-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our clients have to say about working with us.
            </p>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Static quote icon instead of animated */}
          <div className="absolute -top-10 -left-10 z-0 opacity-10">
            <Quote className="h-32 w-32 text-primary" />
          </div>

          {/* Testimonial carousel - simplified animations */}
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg">
            <div className="flex items-center justify-between p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                {/* Client image */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial content */}
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl italic mb-4 text-center md:text-left">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div className="text-center md:text-left">
                    <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 p-4 bg-secondary/5 border-t">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 300)
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-primary scale-125" : "bg-gray-300 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="rounded-full bg-background hover:bg-secondary/10 border border-secondary/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="rounded-full bg-background hover:bg-secondary/10 border border-secondary/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
