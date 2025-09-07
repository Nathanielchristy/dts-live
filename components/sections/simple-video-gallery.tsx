"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { videos } from "@/config/videos"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

interface SimpleVideoItem {
  id: string
  src: string
  poster: string
  title: string
  description: string
}

export function SimpleVideoGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const videoItems: SimpleVideoItem[] = [
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

  const handleVideoClick = (videoId: string) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null)
    } else {
      setPlayingVideo(videoId)
    }
  }

  return (
    <section id="videos" ref={ref} className="w-full py-12 md:py-20 bg-secondary/5">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Work in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            See our craftsmanship and expertise through these project videos.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {videoItems.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                {playingVideo === video.id ? (
                  // Playing Video
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  />
                ) : (
                  // Video Thumbnail
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => handleVideoClick(video.id)}
                  >
                    <img
                      src={video.poster || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                      <div className="bg-primary rounded-full p-3 md:p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{video.description}</p>

                {playingVideo !== video.id && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleVideoClick(video.id)}
                    className="w-full hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Video
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 md:p-6 border-b">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Featured: Our Craftsmanship Process</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Watch how we transform raw materials into beautiful, functional pieces through skilled craftsmanship.
              </p>
            </div>

            <div className="relative aspect-video bg-black">
              {playingVideo === "featured" ? (
                <video
                  src={videos.showcase.craftsmanship.src}
                  poster={videos.showcase.craftsmanship.poster}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setPlayingVideo(null)}
                />
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => handleVideoClick("featured")}
                >
                  <img
                    src={videos.showcase.craftsmanship.poster || "/placeholder.svg"}
                    alt="Featured craftsmanship video"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                    <div className="bg-primary rounded-full p-6 md:p-8 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 md:h-12 md:w-12 text-white" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-muted-foreground mb-4 text-sm md:text-base">Ready to see what we can create for you?</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Get Started Today</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
