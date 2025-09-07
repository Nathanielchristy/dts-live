import type React from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dates Technical Service - Custom Signage & Scenic Fabrication in Dubai, UAE",
    template: "%s | Dates Technical Service",
  },
  description:
    "Custom signage, scenic and metal fabrication, and exhibition stands in Dubai. Quality-driven solutions for retail, events, and corporate branding.",
  keywords: [
    "custom signage Dubai",
    "scenic fabrication UAE",
    "exhibition stands Dubai",
    "metal fabrication UAE",
    "display units Dubai",
    "exterior transformation",
    "3D signage Dubai",
    "neon signage UAE",
    "ACP cladding Dubai",
    "shop front decoration",
    "way finding signage",
    "hoarding signage Dubai",
    "POS displays UAE",
    "illuminated signage",
    "corporate branding Dubai",
    "event fabrication UAE"
  ],
  authors: [{ name: "Dates Technical Service" }],
  creator: "Dates Technical Service",
  publisher: "Dates Technical Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://datestech.com"),
  alternates: {
    canonical: "https://datestech.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://datestech.com",
    title: "Dates Technical Service - Custom Signage & Scenic Fabrication in Dubai, UAE",
    description:
      "Expert signage, fabrication, and branding solutions for exhibitions, retail, and corporate environments in the UAE.",
    siteName: "Dates Technical Service",
    images: [
      {
        url: "https://datestech.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dates Technical Service - Fabrication & Signage Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dates Technical Service - Scenic & Custom Signage Experts in UAE",
    description:
      "Reliable scenic and custom signage company in Dubai for exhibition stands, metalwork, and more.",
    images: ["https://datestech.com/images/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://datestech.com/#business",
      name: "Dates Technical Service",
      alternateName: "Dates Technical Services LLC",
      description:
        "Custom signage, scenic fabrication, metal fabrication, and exhibition stands in Dubai, UAE.",
      url: "https://datestech.com",
      telephone: "+971-04-4599804",
      email: "datestechnical@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "X4MH+RWX - Mina Jebel Ali, Jabal Ali Industrial First",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.0123456789,
        longitude: 55.0123456789,
      },
      openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
      priceRange: "$$",
      image: [
        "https://datestech.com/images/gallery/taste-experience-event.jpg",
        "https://datestech.com/images/gallery/aci-exhibition-stand.jpg",
        "https://datestech.com/images/gallery/dubai-exterior-cladding.jpg",
      ],
      logo: "https://datestech.com/logo.png",
      sameAs: [
        "https://www.instagram.com/datestech/",
        "https://www.linkedin.com/company/dates-technical-service-llc/",
      ],
      areaServed: [
        {
          "@type": "City",
          name: "Dubai",
        },
        {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Scenic Fabrication",
              description:
                "Creating immersive environments and stunning visual displays for exhibitions and events.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Signage",
              description:
                "Bespoke signage solutions including 3D letters, neon signage, wayfinding, and hoarding signs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Metal Fabrication",
              description:
                "Expert metalwork services creating durable and aesthetically pleasing architectural elements.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Display Units",
              description:
                "Professional display solutions including point of sale units, acrylic displays, and illuminated displays.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Transformation",
              description: "Complete exterior makeovers including shop front ACP cladding and decorations.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://datestech.com/#website",
      url: "https://datestech.com",
      name: "Dates Technical Service",
      description:
        "Custom signage and scenic fabrication specialists in Dubai offering event and retail display solutions.",
      publisher: {
        "@id": "https://datestech.com/#business",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://datestech.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://datestech.com/#organization",
      name: "Dates Technical Service",
      alternateName: "Dates Technical Services LLC",
      url: "https://datestech.com",
      logo: {
        "@type": "ImageObject",
        url: "https://datestech.com/logo.png",
        width: 200,
        height: 200,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971-04-4599804",
          contactType: "customer service",
          email: "datestechnical@gmail.com",
          availableLanguage: ["English", "Arabic"],
          areaServed: "AE",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "X4MH+RWX - Mina Jebel Ali, Jabal Ali Industrial First",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      sameAs: [
        "https://www.instagram.com/datestech/",
        "https://www.linkedin.com/company/dates-technical-service-llc/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect and Preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="preload" as="image" href="/videos/posters/hero-poster.jpg" />
        <link rel="preload" as="image" href="/images/gallery/taste-experience-event.jpg" />

        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta itemProp="logo" content="https://datestech.com/logo.png" />


        {/* Theme + iOS */}
        <meta name="theme-color" content="#00A5E2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Dates Technical" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="application-name" content="Dates Technical Service" />
        <meta name="author" content="Dates Technical Service" />

        {/* Geo Tags */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.0123456789;55.0123456789" />
        <meta name="ICBM" content="25.0123456789, 55.0123456789" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
