"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3, Grid2X2, LayoutGrid, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: string
  src: string
  alt: string
  title: string
  description?: string
  featured?: boolean
}

const galleryItems: GalleryItem[] = [
  // 1. Made in Russia Festival Display – Etihad Arena
  {
    id: "made-in-russia-display-2025",
    src: "/images/gallery/made-in-russia-display-2025.jpeg",
    alt: "Artistic red and white horse-themed cutout installation for Made in Russia Festival 2025 at Etihad Arena",
    title: "Made in Russia Festival Display – Etihad Arena",
    description:
      "Bold and artistic freestanding display structure featuring traditional Russian design motifs with red horses and geometric patterns, showcased at the 2025 Made in Russia Festival held at Etihad Arena.",
    featured: true,
  },
  // 2. Scenic Display For Hermes Ramadan
  {
    id: "hermes-ramadan-display",
    src: "/images/gallery/hermes.jpeg",
    alt: "Ramadan display installation for Hermes retail shop at Dubai Mall",
    title: "Scenic Display For Hermes Ramadan",
    description:
      "Elegant Ramadan-themed retail display for Hermes at Dubai Mall featuring premium materials, Arabic calligraphy, and traditional decorative elements to reflect the festive spirit.",
    featured: true,
  },
  // 3. ACI Worldwide Exhibition Stand
    {
    id: "seedsofchange",
    src: "/images/gallery/seedsofchange.jpeg",
    alt: "SeedsofChange exhibition stand with vibrant green branding and modern design",
    title: "Seeds of Change Exhibition Stand",
    description:
      "Proud to have fabricated and installed the Seeds of Change stand at Expo City Dubai using sustainable materials.",
    featured: true,
  },
  {
    id: "aci-exhibition-stand",
    src: "/images/gallery/aci-exhibition-stand.jpg",
    alt: "ACI Worldwide and AURIGA professional exhibition stand with LED lighting and modern design",
    title: "ACI Worldwide Exhibition Stand",
    description:
      "Professional exhibition stand featuring curved LED-lit framework, integrated branding, large display screen, and modern furniture setup for corporate presentation.",
    featured: true,
  },

  // 4. THE TASTE Experience Event
  {
    id: "taste-experience",
    src: "/images/gallery/taste-experience-event.jpg",
    alt: "THE TASTE Experience event setup with custom branding and wooden displays",
    title: "THE TASTE Experience Event",
    description:
      "Complete event setup featuring custom backdrop with integrated lighting, branded wooden displays, and artistic planter arrangements for MOWSEM's corporate event.",
    featured: true,
  },
  // 5. Corporate 3D Dimensional Lettering
  {
    id: "culture-creators-3d-lettering",
    src: "/images/gallery/culture-creators-3d-lettering.jpg",
    alt: "Custom 3D dimensional lettering reading Culture Creators Storytellers Showstoppers in modern office interior",
    title: "Corporate 3D Dimensional Lettering",
    description:
      "Professional interior signage featuring custom 3D dimensional letters with shadow effects, creating an impactful brand statement in a modern corporate meeting room environment.",
    featured: true,
  },
  // 6. Savour Restaurant Exterior Signage
  {
    id: "savour-restaurant-exterior-signage",
    src: "/images/gallery/savour-restaurant-exterior-signage.jpeg",
    alt: "Savour restaurant exterior illuminated signage with modern architectural facade and vertical slat design",
    title: "Savour Restaurant Exterior Signage",
    description: "Contemporary exterior signage for Savour restaurant featuring illuminated LED lettering on modern architectural facade with vertical wood slat design elements and evening ambient lighting.",
    featured: true,
  },
  // 7. Symmetry in Light Installation
  {
    id: "symmetry-light-entrance",
    src: "/images/gallery/symmetry_in_light.jpeg",
    alt: "Symmetrical geometric light tunnel structure leading to a modern glass building entrance",
    title: "Symmetry in Light Installation",
    description:
      "Striking architectural installation featuring a series of illuminated geometric frames forming a tunnel of light, guiding visitors toward a sleek modern glass building. Perfect for high-end events, exhibitions, and grand entrances.",
    featured: true,
  },
  // 8. Arabic Cultural Monument Signage
  {
    id: "arabic-calligraphy-signage-2",
    src: "/images/gallery/arabic-calligraphy-signage-2.jpg",
    alt: "Large Arabic calligraphy signage installation with crescent moon in front of modern Dubai buildings",
    title: "Arabic Cultural Monument Signage",
    description:
      "Stunning large-scale Arabic calligraphy installation featuring elegant script and crescent moon symbol, positioned against Dubai's modern skyline, demonstrating our expertise in cultural and religious signage projects.",
    featured: true,
  },
  // 9. Real Estate Development Hoarding
  // {
  //   id: "real-estate-development-hoarding",
  //   src: "/images/gallery/real-estate-development-hoarding.jpg",
  //   alt: "Large outdoor real estate development hoarding with scenic imagery against Dubai skyline",
  //   title: "Real Estate Development Hoarding",
  //   description:
  //     "Large-scale outdoor advertising hoarding for real estate development featuring high-quality scenic imagery and professional branding, strategically positioned to maximize visibility in Dubai's urban landscape.",
  // },
  // 10. Alsayegh Worldwide Brand Showcase
  {
    id: "alsayegh-worldwide-wall",
    src: "/images/gallery/alsayegh-worldwide-wall.jpeg",
    alt: "Alsayegh Worldwide branding wall featuring logos of affiliated companies including Infya, Mawhoob, 100architects, and more",
    title: "Alsayegh Worldwide Brand Showcase",
    description:
      "Interior branding wall at Alsayegh Worldwide office, showcasing a clean layout of partner and subsidiary company logos such as INFYA, Mawhoob, A.Live, and others. Display highlights the company's global presence with cities listed like Dubai, Abu Dhabi, Riyadh, Shanghai, and London.",
    featured: true,
  },
  // 11. Made in Russia Retail Booths – Etihad Arena
  {
    id: "made-in-russia-booths-2025",
    src: "/images/gallery/made-in-russia-booths-2025.jpeg",
    alt: "Red retail booths at Made in Russia Festival 2025 featuring traditional Russian patterns and branding",
    title: "Made in Russia Retail Booths – Etihad Arena",
    description:
      "Custom-designed retail booths with vibrant red branding and traditional Russian folklore artwork, highlighting brands like Timoni and Ecover at the 2025 Made in Russia Festival at Etihad Arena.",
    featured: true,
  },
  // 12. Abu Dhabi Corporate Event Backdrop
  {
    id: "abu-dhabi-event-backdrop",
    src: "/images/gallery/abu-dhabi-event-backdrop.jpg",
    alt: "Live from Abu Dhabi event backdrop with multiple sponsor logos",
    title: "Abu Dhabi Corporate Event Backdrop",
    description:
      "Professional event backdrop for 'Live from Abu Dhabi' featuring multiple high-profile sponsors including Tourism Ireland, Buttermilk, DigitalMa, and Azure, positioned in an elegant outdoor courtyard setting.",
  },
  // 13. Custom Metal Awards & Trophies
  {
    id: "custom-metal-trophies",
    src: "/images/gallery/custom-metal-trophies.jpg",
    alt: "Precision-cut metal trophies with intricate geometric patterns on wooden bases",
    title: "Custom Metal Awards & Trophies",
    description:
      "Precision-crafted metal trophies featuring intricate geometric patterns and laser-cut details, mounted on premium wooden bases, showcasing our advanced metal fabrication and custom award manufacturing capabilities.",
  },
  // 14. Studio 14 Round Blade Signage
  {
    id: "studio-14-round-blade-signage",
    src: "/images/gallery/studio-14-round-blade-signage.jpeg",
    alt: "Studio 14 illuminated round blade signage with number 14 mounted on interior wall with modern lighting",
    title: "Studio 14 Round Blade Signage",
    description: "Premium illuminated round blade signage for Studio 14 featuring the number 14 in modern typography with LED backlighting, professionally mounted on interior wall with contemporary architectural integration.",
    featured: true,
  },
  // 15. Care7 Premium Interior Signage
  {
    id: "care7-interior-signage",
    src: "/images/gallery/care7-interior-signage.jpg",
    alt: "Illuminated Care7 signage on marble wall with LED backlighting",
    title: "Care7 Premium Interior Signage",
    description:
      "Elegant illuminated 'Care7' signage featuring LED backlighting on premium marble wall surface, showcasing our expertise in high-end interior corporate branding and sophisticated lighting integration.",
  },
  // 16. Supergoop Pool Brand Activation
  {
    id: "supergoop-pool-activation-dubai",
    src: "/images/gallery/supergoop-pool-activation-dubai.jpeg",
    alt: "Supergoop brand activation at luxury resort pool in Dubai with branded towels, pool float, and oceanfront setting",
    title: "Supergoop Pool Brand Activation",
    description: "Luxury resort pool brand activation for Supergoop suncare products featuring branded yellow and white striped towels, inflatable pool float, and premium beachfront setting with palm trees and ocean views in Dubai.",
    featured: true,
  },
  // 17. Ramadan Kareem Seasonal Display
  {
    id: "ramadan-kareem-display",
    src: "/images/gallery/ramadan-kareem-display.jpg",
    alt: "Elegant Ramadan Kareem interior display with Islamic decorative elements and LED lighting",
    title: "Ramadan Kareem Seasonal Display",
    description:
      "Sophisticated interior display for Ramadan featuring Islamic geometric patterns, traditional lanterns, crescent moon elements, and 'Ramadan Kareem' branding with premium LED lighting on marble backdrop.",
  },
  // 18. Hilton Exhibition Stand
  {
    id: "hilton-exhibition-stand-completed",
    src: "/images/gallery/hilton-exhibition-stand-completed.jpeg",
    alt: "Completed Hilton 'For the Stay' exhibition stand with geometric white framework and modern branding",
    title: "Hilton Exhibition Stand",
    description: "Completed exhibition stand for Hilton 'For the Stay' campaign featuring innovative geometric white framework design with branded tape barriers, modern reception desk, and contemporary hospitality industry presentation setup.",
    featured: true,
  },
  // 19. Culture Creators Interior Branding
  {
    id: "culture-creators-signage-alt",
    src: "/images/gallery/culture-creators-signage-alt.jpg",
    alt: "Culture Creators Storytellers Showstoppers interior signage with LED backlighting",
    title: "Culture Creators Interior Branding",
    description:
      "Professional interior signage installation featuring 'Culture Creators Storytellers Showstoppers' with sophisticated LED backlighting on textured wall surface, creating impactful corporate branding in modern office environment.",
  },
  // 20. Al-alameya Medical Exhibition Stand
  {
    id: "alameya-medical-completed",
    src: "/images/gallery/alameya-medical-completed.jpg",
    alt: "Completed Al-alameya Medical Company exhibition stand with professional branding and modern furniture",
    title: "Al-alameya Medical Exhibition Stand",
    description:
      "Completed exhibition stand for Al-alameya Medical Company showcasing 'Creative in Innovative Medical Solutions' with professional curved booth design, integrated GCC certification display, and modern corporate furniture setup.",
    featured: true,
  },
  // 22. Yas F1 VIP Lounge Branding
  {
    id: "alsayegh-vip-lounge-yas",
    src: "/images/gallery/yas.jpeg",
    alt: "Yas branding at VIP lounge for F1 event with illuminated logo wall",
    title: "Yas F1 VIP Lounge Branding",
    description:
      "Exclusive branding installation for Yas at the VIP lounge during the Formula 1 event. Features illuminated signage and premium interior decor to enhance the luxury experience.",
    featured: true,
  },
  // 23. Chalet 35 Natural Wood Signage
  {
    id: "chalet35-natural-wood-signage",
    src: "/images/gallery/chalet35.jpeg",
    alt: "Chalet 35 natural wood signage installed on modern architectural facade",
    title: "Chalet 35 Natural Wood Signage",
    description:
      "Exterior branding for Chalet 35 using precision-crafted natural wood signage, blending seamlessly with contemporary architectural elements to create a warm and inviting entrance.",
    featured: true,
  },
  // 24. FoodTech Event Backdrop & Branding
  {
    id: "foodtech-expo-branding",
    src: "/images/gallery/foodtech.jpeg",
    alt: "FoodTech event backdrop with vibrant printed banner and lighting setup",
    title: "FoodTech Event Backdrop & Branding",
    description:
      "Colorful and illuminated backdrop display with branded printed banner for the FoodTech event, designed to enhance brand recall and photo opportunities during the expo.",
    featured: true,
  },
  // 25. Roscosmos Signage – Dubai Airshow
  {
    id: "roscosmos-dubai-airshow",
    src: "/images/gallery/roscosmos.jpeg",
    alt: "Roscosmos hanging signage for Dubai Airshow featuring aerospace branding",
    title: "Roscosmos Signage – Dubai Airshow",
    description:
      "Suspended branding signage for Roscosmos at the Dubai Airshow, featuring high-impact visuals and strategic ceiling-mounted installation to maximize exhibition visibility.",
    featured: true,
  },
  // 26. UNTOLD 2024 Freestanding Signage – Expo City
  {
    id: "untold-2024-event-signage",
    src: "/images/gallery/untold.jpeg",
    alt: "Freestanding 3D letter signage for UNTOLD 2024 event at Expo City Dubai",
    title: "UNTOLD 2024 Freestanding Signage – Expo City",
    description:
      "Massive 3D freestanding letter installation for the UNTOLD 2024 event at Expo City Dubai. A visually striking landmark designed for branding and visitor engagement.",
    featured: true,
  },
  // 27. Bloomberg Branded Event Backdrop
  {
    id: "bloomberg-event-backdrop",
    src: "/images/gallery/bloomberg.jpeg",
    alt: "Bloomberg event backdrop with bold branding in corporate event setting",
    title: "Bloomberg Branded Event Backdrop",
    description:
      "High-impact branded backdrop for Bloomberg's corporate event, designed for media visibility and featuring modern typography and layout in a sleek, professional environment.",
    featured: true,
  },
  // 28. YAS RIVA Illuminated Signage
  {
    id: "yas-riva-illuminated-signage",
    src: "/images/gallery/yas-riva-illuminated-signage.jpeg",
    alt: "Large illuminated YAS RIVA signage installation at night",
    title: "YAS RIVA Illuminated Signage",
    description:
      "Impressive large-scale illuminated signage installation for YAS RIVA, featuring professional LED lighting and premium materials, demonstrating our expertise in high-impact nighttime visibility signage projects.",
  },
]

const gridLayouts = [
  { id: "mobile", icon: LayoutGrid, label: "Mobile" },
  { id: "grid-2", icon: Grid2X2, label: "2 Columns" },
  { id: "grid-3", icon: Grid3X3, label: "3 Columns" },
]

// Mobile-optimized image component
const LazyImage = ({ item, onClick, isMobile }: { item: GalleryItem; onClick: () => void; isMobile: boolean }) => {
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px",
  })
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div
      ref={imageRef}
      className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer break-inside-avoid mb-4"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        {imageInView ? (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}
            {hasError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
                <div className="text-center">
                  <div className="text-2xl mb-2">📷</div>
                  <div className="text-sm">Image unavailable</div>
                </div>
              </div>
            ) : (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                quality={isMobile ? 75 : 85}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setHasError(true)
                  setIsLoading(false)
                }}
                sizes={isMobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              />
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Zoom Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <ZoomIn className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-green-500/90 text-white text-xs px-2 py-1 rounded-full font-medium">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{item.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
      </div>
    </div>
  )
}

export function PhotoGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [gridLayout, setGridLayout] = useState("mobile")
  const [isMobile, setIsMobile] = useState(false)
  const [visibleItems, setVisibleItems] = useState(8) // Start with fewer items on mobile
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setGridLayout(window.innerWidth < 768 ? "mobile" : "grid-3")
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const openLightbox = useCallback((item: GalleryItem) => {
    setSelectedImage(item)
    setCurrentImageIndex(galleryItems.findIndex((i) => i.id === item.id))
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
  }, [])

  const nextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % galleryItems.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(galleryItems[nextIndex])
  }, [currentImageIndex])

  const prevImage = useCallback(() => {
    const prevIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(galleryItems[prevIndex])
  }, [currentImageIndex])

  const loadMoreItems = useCallback(() => {
    setIsLoadingMore(true)
    setTimeout(() => {
      setVisibleItems((prev) => Math.min(prev + 8, galleryItems.length))
      setIsLoadingMore(false)
    }, 500)
  }, [])

  const getGridClasses = () => {
    if (isMobile || gridLayout === "mobile") {
      return "grid grid-cols-1 gap-4"
    }
    switch (gridLayout) {
      case "grid-2":
        return "grid grid-cols-2 gap-6"
      case "grid-3":
        return "grid grid-cols-3 gap-6"
      default:
        return "grid grid-cols-3 gap-6"
    }
  }

  const displayedItems = galleryItems.slice(0, visibleItems)
  const hasMoreItems = visibleItems < galleryItems.length

  return (
    <section id="gallery" ref={ref} className="w-full py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our extensive portfolio showcasing custom signage, fabrication, and design solutions across Dubai
            and the UAE.
          </p>
        </motion.div>

        {/* Layout Controls - Hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <p className="text-sm text-muted-foreground">
                Showing {displayedItems.length} of {galleryItems.length}{" "}
                {galleryItems.length === 1 ? "project" : "projects"}
              </p>
            </div>

            {/* Layout Controls */}
            <div className="flex gap-1 bg-secondary/10 rounded-lg p-1">
              {gridLayouts.slice(1).map((layout) => (
                <Button
                  key={layout.id}
                  variant={gridLayout === layout.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setGridLayout(layout.id)}
                  className={`h-8 w-8 p-0 ${gridLayout === layout.id ? "bg-primary text-white" : "hover:bg-primary/10"}`}
                  title={layout.label}
                >
                  <layout.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mobile Stats */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8"
          >
            <p className="text-sm text-muted-foreground">
              Showing {displayedItems.length} of {galleryItems.length} projects
            </p>
          </motion.div>
        )}

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={getGridClasses()}
        >
          {displayedItems.map((item, index) => (
            <LazyImage key={item.id} item={item} onClick={() => openLightbox(item)} isMobile={isMobile} />
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMoreItems && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              onClick={loadMoreItems}
              disabled={isLoadingMore}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white min-w-[200px]"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Loading...
                </>
              ) : (
                `Load More Projects (${galleryItems.length - visibleItems} remaining)`
              )}
            </Button>
          </motion.div>
        )}

        {/* All Loaded Message */}
        {!hasMoreItems && visibleItems > 8 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-12">
            <p className="text-muted-foreground">You've viewed all {galleryItems.length} projects in our gallery</p>
          </motion.div>
        )}
      </div>

      {/* Enhanced Lightbox Modal - Mobile Optimized */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-2 md:p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full max-w-7xl max-h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center mb-2 md:mb-4 px-2">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="text-white/80 text-xs md:text-sm">
                    {currentImageIndex + 1} of {galleryItems.length}
                  </div>
                  {selectedImage.featured && (
                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 h-8 w-8 md:h-10 md:w-10"
                  onClick={closeLightbox}
                >
                  <X className="h-4 w-4 md:h-6 md:w-6" />
                </Button>
              </div>

              {/* Main Image Container */}
              <div className="flex-1 relative flex items-center justify-center min-h-0">
                {/* Navigation Buttons */}
                {galleryItems.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 h-8 w-8 md:h-12 md:w-12"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4 md:h-8 md:w-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 h-8 w-8 md:h-12 md:w-12"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4 md:h-8 md:w-8" />
                    </Button>
                  </>
                )}

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                    quality={isMobile ? 85 : 95}
                  />
                </div>
              </div>

              {/* Bottom Info Panel - Mobile Optimized */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 md:p-6 mt-2 md:mt-4 mx-1 md:mx-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                      {selectedImage.featured && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{selectedImage.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
