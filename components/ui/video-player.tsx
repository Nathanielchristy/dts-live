"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

interface VideoPlayerProps {
  src: string
  poster?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  className?: string
  overlayColor?: string
  showControls?: boolean
}

export function VideoPlayer({
  src,
  poster = "/videos/posters/default-poster.jpg",
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
  overlayColor = "bg-secondary/50",
  showControls = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false))
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Overlay */}
      <div className={`absolute inset-0 z-10 ${overlayColor}`}></div>

      {/* Video - removed zoom animation */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={poster}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Controls */}
      {showControls && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4 z-20 flex gap-2"
        >
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </motion.div>
      )}

      {/* Logo Watermark - simplified animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 z-20"
      >
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[13.9px] border-b-primary border-r-[8px] border-r-transparent"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
