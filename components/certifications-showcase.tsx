"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const certifications = [
  {
    title: "Python Programming Internship",
    issuer: "Motion Cut",
    description: "Gained hands-on experience in Python programming and automation.",
    date: "2024",
    skills: ["Python", "Automation", "Programming"],
    image: "/images/certifications/python-motion-cut.jpg",
    type: "Internship",
    color: "bg-blue-500",
  },
  {
    title: "Data Analytics Assessment",
    issuer: "LearnTube",
    description: "Demonstrated proficiency in data analysis concepts and practical skills.",
    date: "2024",
    skills: ["Data Analysis", "Statistics", "Analytics"],
    image: "/images/certifications/data-analytics-learntube.jpg",
    type: "Assessment",
    color: "bg-green-500",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "LearnTube",
    description: "Learned foundational data analytics techniques and tools.",
    date: "2024",
    skills: ["Data Analytics", "Foundations", "Tools"],
    image: "/images/certifications/intro-analytics-learntube.jpg",
    type: "Course",
    color: "bg-purple-500",
  },
  {
    title: "Data Science Job Simulation",
    issuer: "Commonwealth Bank of Australia (via Forage)",
    description: "Simulated real-world data science tasks to enhance problem-solving abilities.",
    date: "2024",
    skills: ["Data Science", "Problem Solving", "Real-world Applications"],
    image: "/images/certifications/data-science-forage.jpg",
    type: "Simulation",
    color: "bg-orange-500",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM (via Coursera)",
    description: "Acquired a basic understanding of AI concepts and applications.",
    date: "2023",
    skills: ["Artificial Intelligence", "Machine Learning", "AI Applications"],
    image: "/images/certifications/ai-intro-ibm.jpg",
    type: "Course",
    color: "bg-cyan-500",
  },
  {
    title: "C++ Programming",
    issuer: "MBTB (Maharashtra Business Training Board)",
    description: "Developed programming skills in C++ focusing on OOP.",
    date: "2023",
    skills: ["C++", "OOP", "Programming"],
    image: "/images/certifications/cpp-mbtb.jpg",
    type: "Certification",
    color: "bg-red-500",
  },
  {
    title: "C Programming",
    issuer: "MBTB Academy (Maharashtra Business Training Board)",
    description: "Built foundational skills in C programming language.",
    date: "2023",
    skills: ["C Programming", "Foundations", "Programming Logic"],
    image: "/images/certifications/c-programming-mbtb.jpg",
    type: "Certification",
    color: "bg-yellow-500",
  },
]

const typeColors = {
  Internship: "bg-blue-500",
  Assessment: "bg-green-500",
  Course: "bg-purple-500",
  Simulation: "bg-orange-500",
  Certification: "bg-red-500",
}

export default function CertificationsShowcase() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (certTitle: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [certTitle]: true,
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Award className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold">Certifications & Training</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => {
          const placeholderImage = `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(cert.title)}&bg=${cert.color.replace("bg-", "").replace("-500", "")}&color=white`
          const imageSrc = imageErrors[cert.title] ? placeholderImage : cert.image

          return (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={`${cert.title} Certificate`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  onError={() => handleImageError(cert.title)}
                />
                <div className="absolute top-2 right-2">
                  <Badge className={`${typeColors[cert.type as keyof typeof typeColors]} text-white`}>
                    {cert.type}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                <p className="text-sm text-primary font-medium">{cert.issuer}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Completed in {cert.date}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">Continuous Learning</h3>
            <p className="text-muted-foreground">
              I'm committed to staying updated with the latest technologies and continuously expanding my skill set
              through various learning platforms and practical projects.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
