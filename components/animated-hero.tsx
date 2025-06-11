"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AnimatedHero() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [imageError, setImageError] = useState(false)

  const roles = ["Computer & Data Science Student", "Full-Stack Developer", "Problem Solver", "Data Enthusiast"]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section className="container flex flex-col items-center justify-center min-h-screen py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="flex flex-col items-center space-y-6 text-center animate-in fade-in duration-1000">
        <div className="relative w-40 h-40 overflow-hidden rounded-full mb-6 ring-4 ring-primary/20 animate-in zoom-in duration-700 delay-300 shadow-xl">
          <Image
            src={
              imageError
                ? "/placeholder.svg?height=160&width=160&text=AR&bg=6366f1&color=white"
                : "/images/profile/anirudh-profile.jpg"
            }
            alt="Anirudh Rajgopal - Computer Science Student"
            fill
            className="object-cover transition-transform hover:scale-110 duration-300"
            priority
            sizes="(max-width: 768px) 160px, 160px"
            onError={() => setImageError(true)}
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700 delay-500">
            Anirudh Rajgopal
          </h1>

          <div className="h-8 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground animate-in slide-in-from-bottom duration-700 delay-700">
              {roles[currentRole]}
            </p>
          </div>
        </div>

        <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400 animate-in slide-in-from-bottom duration-700 delay-900">
          Passionate about leveraging data-driven insights to solve real-world problems and create innovative solutions.
        </p>

        <div className="flex gap-4 animate-in slide-in-from-bottom duration-700 delay-1100">
          <Button asChild className="group">
            <Link href="#projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="group">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex gap-4 mt-6 animate-in slide-in-from-bottom duration-700 delay-1300">
          <Link href="https://github.com/anirudhr2005" target="_blank" rel="noopener noreferrer">
            <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/anirudh-rajgopal-b810a5285/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:rajgopalanirudh5@gmail.com">
            <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
