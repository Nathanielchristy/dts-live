import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Custom Signage & Scenic Fabrication Solutions in Dubai, UAE
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Leading provider of bespoke signage, exhibition stands, metal fabrication, and exterior transformation
                services across Dubai and the UAE. Transforming spaces with precision craftsmanship and innovative
                design.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact" aria-label="Request a consultation for custom signage services">
                  Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services" aria-label="Explore our signage and fabrication services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/gallery/taste-experience-event.jpg"
              width={550}
              height={550}
              alt="Custom signage and scenic fabrication work by Dates Technical Service - THE TASTE Experience event setup with professional branding and wooden displays in Dubai"
              className="rounded-lg object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
