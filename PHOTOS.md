# Photo Replacement Instructions

This document provides instructions on how to replace the placeholder images with your own photos throughout the website.

## Photo File Structure

All images are stored in the `/public/images/` directory with the following structure:

\`\`\`
/public/images/
  ├── logo.png                # Company logo
  ├── hero/                   # Hero section images
  │   └── hero-poster.jpg     # Video poster image for hero section
  ├── services/               # Services section images
  │   ├── signage-1.jpg
  │   ├── signage-2.jpg
  │   ├── joinery-1.jpg
  │   └── joinery-2.jpg
  ├── about/                  # About section images
  │   ├── team.jpg
  │   └── workshop.jpg
  ├── sectors/                # Sectors section images
  │   ├── events.jpg
  │   ├── exhibitions.jpg
  │   └── corporate.jpg
  ├── projects/               # Project gallery images
  │   ├── project-1.jpg
  │   ├── project-2.jpg
  │   └── ...
  └── testimonials/           # Testimonial section images
      ├── client-1.jpg
      ├── client-2.jpg
      └── ...
\`\`\`

## How to Replace Images

### 1. Prepare Your Images

#### Image Formats
- Use **JPG/JPEG** for photographs and complex images with many colors
- Use **PNG** for images that require transparency
- Use **WebP** for better compression and quality (with JPG fallbacks for older browsers)
- Use **SVG** for logos, icons, and simple graphics that need to scale

#### Recommended Image Sizes
- **Logo**: 200px × 200px (maintain aspect ratio)
- **Hero Images**: 1920px × 1080px (16:9 ratio)
- **Service/Sector Images**: 800px × 600px
- **Project Gallery**: 1200px × 800px
- **Team/Client Photos**: 400px × 400px (1:1 ratio for consistency)

#### Image Optimization
Before adding images to the project:
1. Compress images to reduce file size (use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/))
2. Ensure images are appropriately sized (don't use 4000px wide images for small thumbnails)
3. Consider using WebP format with JPEG fallbacks for better performance

### 2. Replace the Files

Simply replace the existing files in the `/public/images/` directory with your own files. Keep the same filenames to ensure all references work correctly.

If you need to use different filenames:
1. Place your new images in the appropriate folders
2. Update the references in the component files where the images are used

### 3. Image Component Usage

Throughout the site, images are displayed using Next.js's `Image` component:

\`\`\`jsx
import Image from "next/image"

<Image
  src="/images/about/team.jpg"
  alt="Our team at work"
  width={600}
  height={400}
  className="rounded-lg object-cover"
/>
\`\`\`

When replacing images, make sure to:
1. Update the `src` attribute to point to your new image
2. Adjust the `width` and `height` attributes to match your image's dimensions
3. Update the `alt` text to accurately describe your new image

## Image Guidelines

### Brand Consistency
- Use images that align with your brand colors (blue and dark gray/black)
- Maintain a consistent style across all images
- Consider using a subtle filter or overlay to unify diverse images

### Quality Standards
- Use high-resolution, professional images
- Avoid blurry, pixelated, or low-quality images
- Ensure good lighting and composition

### Content Recommendations

#### Hero Section
- Use impactful, wide images that work well with text overlay
- Consider images that show your craftsmanship or finished projects
- Images should be visually striking and create a strong first impression

#### Services/Sectors
- Use images that clearly demonstrate each service or sector
- Show your work in context or in use
- Include images of your team working when appropriate

#### About Section
- Include authentic images of your team and workspace
- Show your craftsmen at work
- Highlight your equipment and facilities

#### Projects Gallery
- Show a variety of completed projects
- Include before/after comparisons when possible
- Showcase different types of signage and joinery work

#### Testimonials
- Use professional headshots of clients (with permission)
- Alternatively, use images of the projects discussed in testimonials

## Placeholder Replacement

Currently, the site uses placeholder images from the `/placeholder.svg` service. Replace these with your actual images as soon as possible for a professional appearance.

Example of current placeholder usage:
\`\`\`jsx
<Image
  src="/placeholder.svg?height=550&width=550"
  width={550}
  height={550}
  alt="Custom signage installation at an exhibition"
  className="rounded-lg object-cover"
/>
\`\`\`

Replace with your actual image:
\`\`\`jsx
<Image
  src="/images/projects/exhibition-signage.jpg"
  width={550}
  height={550}
  alt="Custom signage installation at the Dubai Expo"
  className="rounded-lg object-cover"
/>
\`\`\`

## Background Images and Patterns

Some sections use background images or patterns. These can be found in the CSS files and can be replaced by:

1. Adding your new background image to the appropriate folder
2. Updating the CSS reference in the component or global CSS file

## Need Help?

If you need assistance with image optimization, selection, or implementation, consider:
- Hiring a professional photographer for key project shots
- Working with a graphic designer to ensure visual consistency
- Consulting with your web developer for technical implementation
