"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { VideoPlayer } from "@/components/ui/video-player"
import { videos } from "@/config/videos"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

export function VideoGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeVideo, setActiveVideo] = useState({
    src: videos.showcase.craftsmanship.src,
    poster: videos.showcase.craftsmanship.poster,
    title: videos.showcase.craftsmanship.title,
    description: videos.showcase.craftsmanship.description,
  })

  const videoOptions = [
    {
      id: "craftsmanship",
      src: videos.showcase.craftsmanship.src,
      poster: videos.showcase.craftsmanship.poster,
      title: videos.showcase.craftsmanship.title,
      description: videos.showcase.craftsmanship.description,
    },
    {
      id: "exhibition",
      src: videos.showcase.exhibition.src,
      poster: videos.showcase.exhibition.poster,
      title: videos.showcase.exhibition.title,
      description: videos.showcase.exhibition.description,
    },
    {
      id: "signage",
      src: videos.showcase.signage.src,
      poster: videos.showcase.signage.poster,
      title: videos.showcase.signage.title,
      description: videos.showcase.signage.description,
    },
    {
      id: "russia",
      src: videos.showcase.russia.src,
      poster: videos.showcase.russia.poster,
      title: videos.showcase.russia.title,
      description: videos.showcase.russia.description,
    },
  ]

  // Simplified animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="videos" ref={ref} className="w-full py-20 md:py-32 bg-secondary/5 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work in Action</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See our craftsmanship and expertise through these project videos.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-xl"
          >
            <div className="aspect-video">
              <VideoPlayer
                src={activeVideo.src}
                poster={activeVideo.poster}
                autoPlay={false}
                loop={true}
                muted={false}
                showControls={true}
                className="w-full h-full"
                overlayColor="bg-secondary/20"
              />
            </div>
            <div className="p-4 bg-background">
              <h3 className="text-xl font-bold">{activeVideo.title}</h3>
              <p className="text-muted-foreground">{activeVideo.description}</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold">Video Gallery</h3>
            <p className="text-muted-foreground mb-4">Select a video to watch:</p>

            {videoOptions.map((video, index) => (
              <div
                key={video.id}
                className={`relative rounded-lg overflow-hidden cursor-pointer group ${
                  activeVideo.src === video.src ? "ring-2 ring-primary" : "hover:ring-1 hover:ring-primary/50"
                }`}
                onClick={() => setActiveVideo(video)}
              >
                <div className="aspect-video relative">
                  <img
                    src={video.poster || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-primary/80 hover:bg-primary text-white rounded-full"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-2 bg-background">
                  <h4 className="font-medium text-sm">{video.title}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
