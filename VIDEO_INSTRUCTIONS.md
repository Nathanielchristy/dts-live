# Video Replacement Instructions

This document provides instructions on how to replace the placeholder videos with your own videos.

## Video File Structure

All videos are stored in the `/public/videos/` directory with the following structure:

\`\`\`
/public/videos/
  ├── hero-video.mp4           # Main hero section background video
  ├── craftsmanship.mp4        # Video showcasing craftsmanship
  ├── exhibition-setup.mp4     # Video of exhibition setup
  ├── signage-installation.mp4 # Video of signage installation
  ├── testimonial-1.mp4        # Client testimonial video
  ├── testimonial-2.mp4        # Client testimonial video
  └── /posters/                # Folder containing video poster images
      ├── hero-poster.jpg
      ├── craftsmanship-poster.jpg
      ├── exhibition-poster.jpg
      ├── signage-poster.jpg
      ├── testimonial-1-poster.jpg
      ├── testimonial-2-poster.jpg
      └── default-poster.jpg
\`\`\`

## How to Replace Videos

1. **Prepare your videos**:
   - Format: MP4 (H.264 codec recommended)
   - Resolution: 1920x1080 or higher recommended
   - Aspect ratio: 16:9 for best results
   - Duration: 
     - Hero video: 30-60 seconds (will loop)
     - Other videos: As needed for your content

2. **Prepare poster images**:
   - Format: JPG or PNG
   - Resolution: 1920x1080 recommended
   - Aspect ratio: Should match your video (16:9 recommended)

3. **Replace the files**:
   - Simply replace the existing files in the `/public/videos/` directory with your own files
   - Keep the same filenames to ensure all references work correctly
   - If you need to use different filenames, update the references in `/config/videos.ts`

4. **Update video metadata (optional)**:
   - If you want to change titles, descriptions, or other metadata, edit the `/config/videos.ts` file

## Video Configuration

All video references are centralized in the `/config/videos.ts` file. If you need to change video sources, titles, or descriptions, edit this file.

## Video Component Usage

The `<VideoPlayer>` component is used throughout the site to display videos. It accepts the following props:

- `src`: Path to the video file
- `poster`: Path to the poster image (shown before video plays)
- `autoPlay`: Whether to autoplay the video (default: true)
- `loop`: Whether to loop the video (default: true)
- `muted`: Whether to mute the video (default: true)
- `className`: Additional CSS classes
- `overlayColor`: Color overlay for the video (default: "bg-secondary/50")
- `showControls`: Whether to show video controls (default: true)

Example:
\`\`\`jsx
<VideoPlayer
  src="/videos/hero-video.mp4"
  poster="/videos/posters/hero-poster.jpg"
  autoPlay
  loop
  muted
  showControls={false}
/>
