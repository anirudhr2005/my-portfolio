import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import EnhancedProjectCard from "@/components/enhanced-project-card"

const projects = [
  {
    title: "Chat Application",
    description:
      "Built a full-stack private chat app using Node.js and Next.js, focusing on clean design and real-time communication.",
    tags: ["Node.js", "Next.js", "Real-time", "Full-stack"],
    image: "/placeholder.svg?height=200&width=300&text=💬+Chat+App&bg=4f46e5&color=white",
    slug: "chat-application",
    githubUrl: "https://github.com/anirudhr2005",
  },
  {
    title: "Tesla Market Analysis",
    description:
      "Conducted an economic analysis of Tesla's market structure and created a SWOT analysis for academic coursework.",
    tags: ["Market Analysis", "SWOT", "Economic Analysis"],
    image: "/placeholder.svg?height=200&width=300&text=📊+Market+Analysis&bg=059669&color=white",
    slug: "tesla-market-analysis",
  },
  {
    title: "Chess Game in C++",
    description:
      "Developed a fully functional console-based Chess game using C++ with complete rules enforcement and OOP concepts.",
    tags: ["C++", "OOP", "Game Development", "Algorithms"],
    image: "/placeholder.svg?height=200&width=300&text=♟️+Chess+Game&bg=dc2626&color=white",
    slug: "chess-game",
    githubUrl: "https://github.com/anirudhr2005",
  },
  {
    title: "Hotel Management System",
    description:
      "Created a console-based system to manage room bookings, check-ins, check-outs, and customer details using OOP principles.",
    tags: ["C++", "File Handling", "OOP", "System Design"],
    image: "/placeholder.svg?height=200&width=300&text=🏨+Hotel+System&bg=ea580c&color=white",
    slug: "hotel-management",
    githubUrl: "https://github.com/anirudhr2005",
  },
  {
    title: "Handwriting Machine",
    description:
      "Developed control software for a handwriting pen plotter supporting multiple file formats and hardware-software integration.",
    tags: ["Hardware Integration", "Control Systems", "File Processing"],
    image: "/placeholder.svg?height=200&width=300&text=✍️+Handwriting+Bot&bg=7c3aed&color=white",
    slug: "handwriting-machine",
    githubUrl: "https://github.com/anirudhr2005",
  },
  {
    title: "AutoCorrect Tool",
    description:
      "Created a tool to detect and correct spelling errors using Levenshtein Distance algorithm, providing suggestions from a dictionary.",
    tags: ["Algorithms", "NLP", "Tool Development"],
    image: "/placeholder.svg?height=200&width=300&text=📝+AutoCorrect&bg=0891b2&color=white",
    slug: "autocorrect-tool",
    githubUrl: "https://github.com/anirudhr2005",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container py-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive showcase of my development projects and technical achievements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <EnhancedProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              slug={project.slug}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
