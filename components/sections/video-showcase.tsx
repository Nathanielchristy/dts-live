"use client"

import { useInView } from "react-intersection-observer"
import { VideoPlayer } from "@/components/ui/video-player"
import { motion } from "framer-motion"

interface VideoShowcaseProps {
  title: string
  description: string
  videoSrc: string
  posterSrc?: string
}

export function VideoShowcase({ title, description, videoSrc, posterSrc }: VideoShowcaseProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-lg overflow-hidden shadow-xl"
        >
          {/* Decorative elements inspired by logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full z-10"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 w-0 h-0 border-l-[30px] border-l-transparent border-b-[51.96px] border-b-primary/30 border-r-[30px] border-r-transparent z-10"
          />

          <div className="aspect-video">
            <VideoPlayer
              src={videoSrc}
              poster={posterSrc}
              autoPlay={false}
              loop={true}
              muted={false}
              showControls={true}
              className="w-full h-full"
              overlayColor="bg-secondary/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
