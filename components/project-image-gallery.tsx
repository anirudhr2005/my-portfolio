"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

interface ProjectImageGalleryProps {
  projectSlug: string
  images: ProjectImage[]
}

// Default images for each project
const defaultProjectImages: Record<string, ProjectImage[]> = {
  "chat-application": [
    {
      src: "/images/projects/chat-application/ai-interface.png",
      alt: "AI-Powered Chat Interface",
      caption: "Advanced AI integration for intelligent conversations",
    },
  ],
  "tesla-market-analysis": [
    {
      src: "/images/projects/tesla-market-analysis/tesla-logo.png",
      alt: "Tesla Market Analysis",
      caption: "Comprehensive analysis of Tesla's market position",
    },
  ],
  "chess-game": [
    {
      src: "/images/projects/chess-game/game-board.png",
      alt: "Chess Game Implementation",
      caption: "Professional chess pieces and board representation",
    },
  ],
  "hotel-management": [
    {
      src: "/images/projects/hotel-management/main-interface.png",
      alt: "Hotel Management System Interface",
      caption: "Comprehensive hotel operations management system",
    },
  ],
  "handwriting-machine": [
    {
      src: "/images/projects/handwriting-machine/machine-setup.png",
      alt: "Handwriting Plotter Machine",
      caption: "Precision handwriting machine with automated pen control",
    },
  ],
  "autocorrect-tool": [
    {
      src: "/images/projects/autocorrect-tool/tool-interface.png",
      alt: "AutoCorrect Tool Interface",
      caption: "Advanced text correction with AI-powered suggestions",
    },
  ],
}

export default function ProjectImageGallery({ projectSlug, images }: ProjectImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  // Use provided images or fall back to default images
  const projectImages = images.length > 0 ? images : defaultProjectImages[projectSlug] || []

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  const handleImageError = (src: string) => {
    setImageErrors((prev) => ({ ...prev, [src]: true }))
  }

  if (projectImages.length === 0) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">No images available for this project</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const currentImage = projectImages[currentIndex]
  const imageSrc = imageErrors[currentImage.src]
    ? `/placeholder.svg?height=400&width=800&text=${encodeURIComponent(projectSlug)}&bg=6366f1&color=white`
    : currentImage.src

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            onError={() => handleImageError(currentImage.src)}
          />

          {projectImages.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="icon" className="absolute top-2 right-2 opacity-80 hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <div className="relative aspect-video">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  onError={() => handleImageError(currentImage.src)}
                />
              </div>
              {currentImage.caption && (
                <p className="text-center text-sm text-muted-foreground mt-2">{currentImage.caption}</p>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {projectImages.length > 1 && (
          <div className="p-4">
            <div className="flex gap-2 justify-center">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        )}

        {currentImage.caption && (
          <div className="p-4 pt-0">
            <p className="text-sm text-muted-foreground text-center">{currentImage.caption}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
