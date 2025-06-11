import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ProjectImageGallery from "@/components/project-image-gallery"

const projects = {
  "chat-application": {
    title: "Chat Application",
    description:
      "Built a full-stack private chat app using Node.js and Next.js, focusing on clean design and real-time communication.",
    longDescription:
      "This comprehensive chat application demonstrates modern web development practices with real-time communication capabilities. The project showcases full-stack development skills, from backend API design to frontend user experience optimization.",
    tags: ["Node.js", "Next.js", "Real-time", "Full-stack"],
    githubUrl: "https://github.com/anirudhr2005",
    liveUrl: "",
    features: [
      "Real-time messaging with WebSocket integration",
      "User authentication and authorization",
      "Private and group chat functionality",
      "Message history and persistence",
      "Responsive design for mobile and desktop",
      "Clean and intuitive user interface",
    ],
    technologies: [
      { name: "Next.js", description: "React framework for production" },
      { name: "Node.js", description: "JavaScript runtime for backend" },
      { name: "Socket.io", description: "Real-time bidirectional communication" },
      { name: "MongoDB", description: "NoSQL database for message storage" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    ],
    challenges: [
      "Implementing real-time message synchronization across multiple clients",
      "Designing an efficient database schema for chat history",
      "Ensuring secure user authentication and data privacy",
    ],
    duration: "3 months",
    team: "Solo Project",
  },
  "tesla-market-analysis": {
    title: "Tesla Market Analysis",
    description:
      "Conducted an economic analysis of Tesla's market structure and created a SWOT analysis for academic coursework.",
    longDescription:
      "An in-depth economic analysis project examining Tesla's market position, competitive landscape, and strategic opportunities. This research project demonstrates analytical thinking and market research capabilities.",
    tags: ["Market Analysis", "SWOT", "Economic Analysis"],
    features: [
      "Comprehensive market structure analysis",
      "SWOT analysis framework implementation",
      "Competitive landscape evaluation",
      "Financial performance metrics analysis",
      "Strategic recommendations development",
      "Data visualization and presentation",
    ],
    technologies: [
      { name: "Excel", description: "Data analysis and visualization" },
      { name: "Python", description: "Statistical analysis and modeling" },
      { name: "Matplotlib", description: "Data visualization library" },
      { name: "Pandas", description: "Data manipulation and analysis" },
    ],
    challenges: [
      "Gathering and validating market data from multiple sources",
      "Applying economic theories to real-world business scenarios",
      "Creating actionable insights from complex market data",
    ],
    duration: "2 months",
    team: "Academic Project",
  },
  "chess-game": {
    title: "Chess Game in C++",
    description:
      "Developed a fully functional console-based Chess game using C++ with complete rules enforcement and OOP concepts.",
    longDescription:
      "A comprehensive chess game implementation showcasing advanced C++ programming skills and object-oriented design principles. The game includes full chess rule enforcement, move validation, and game state management.",
    tags: ["C++", "OOP", "Game Development", "Algorithms"],
    githubUrl: "https://github.com/anirudhr2005",
    features: [
      "Complete chess rules implementation",
      "Move validation and legal move generation",
      "Check and checkmate detection",
      "Castling and en passant special moves",
      "Game state persistence and loading",
      "Console-based user interface with board visualization",
    ],
    technologies: [
      { name: "C++", description: "Core programming language" },
      { name: "OOP", description: "Object-oriented programming principles" },
      { name: "STL", description: "Standard Template Library" },
      { name: "File I/O", description: "Game state persistence" },
    ],
    challenges: [
      "Implementing complex chess rules and edge cases",
      "Designing an efficient board representation",
      "Creating a robust move validation system",
    ],
    duration: "2 months",
    team: "Solo Project",
  },
  "hotel-management": {
    title: "Hotel Management System",
    description:
      "Created a console-based system to manage room bookings, check-ins, check-outs, and customer details using OOP principles.",
    longDescription:
      "A comprehensive hotel management system built with C++ demonstrating software engineering principles and database management concepts. The system handles all aspects of hotel operations from reservations to billing.",
    tags: ["C++", "File Handling", "OOP", "System Design"],
    githubUrl: "https://github.com/anirudhr2005",
    features: [
      "Room booking and reservation management",
      "Customer check-in and check-out processes",
      "Billing and payment processing",
      "Room availability tracking",
      "Customer information management",
      "Report generation and analytics",
    ],
    technologies: [
      { name: "C++", description: "Core programming language" },
      { name: "File Handling", description: "Data persistence and storage" },
      { name: "OOP", description: "Object-oriented design patterns" },
      { name: "Data Structures", description: "Efficient data organization" },
    ],
    challenges: [
      "Designing a scalable system architecture",
      "Implementing data persistence without a database",
      "Creating an intuitive user interface for complex operations",
    ],
    duration: "1.5 months",
    team: "Solo Project",
  },
  "handwriting-machine": {
    title: "Handwriting Machine",
    description:
      "Developed control software for a handwriting pen plotter supporting multiple file formats and hardware-software integration.",
    longDescription:
      "An innovative hardware-software integration project involving the development of control software for a handwriting pen plotter. This project demonstrates skills in embedded systems, file format processing, and mechanical control systems.",
    tags: ["Hardware Integration", "Control Systems", "File Processing"],
    githubUrl: "https://github.com/anirudhr2005",
    features: [
      "Multi-format file support (JPG, BMP, DXF, G-code)",
      "Hardware control and coordination",
      "Path optimization algorithms",
      "Real-time plotting feedback",
      "Calibration and setup procedures",
      "Error handling and recovery systems",
    ],
    technologies: [
      { name: "C++", description: "Control software development" },
      { name: "Arduino", description: "Microcontroller programming" },
      { name: "Image Processing", description: "File format conversion" },
      { name: "Mechanical Systems", description: "Hardware integration" },
    ],
    challenges: [
      "Coordinating software with mechanical hardware",
      "Processing and converting multiple file formats",
      "Implementing precise motor control algorithms",
    ],
    duration: "4 months",
    team: "Hardware-Software Collaboration",
  },
  "autocorrect-tool": {
    title: "AutoCorrect Tool",
    description:
      "Created a tool to detect and correct spelling errors using Levenshtein Distance algorithm, providing suggestions from a dictionary.",
    longDescription:
      "An intelligent text processing tool that implements advanced string matching algorithms to provide spelling correction suggestions. This project demonstrates algorithmic thinking and natural language processing concepts.",
    tags: ["Algorithms", "NLP", "Tool Development"],
    githubUrl: "https://github.com/anirudhr2005",
    features: [
      "Levenshtein Distance algorithm implementation",
      "Dictionary-based word suggestions",
      "Real-time spell checking",
      "Customizable suggestion ranking",
      "Multiple language support framework",
      "Performance optimization for large dictionaries",
    ],
    technologies: [
      { name: "Python", description: "Core algorithm implementation" },
      { name: "Dynamic Programming", description: "Efficient distance calculation" },
      { name: "Data Structures", description: "Dictionary and trie optimization" },
      { name: "String Algorithms", description: "Text processing and matching" },
    ],
    challenges: [
      "Optimizing algorithm performance for real-time use",
      "Balancing suggestion accuracy with speed",
      "Handling edge cases in text processing",
    ],
    duration: "1 month",
    team: "Solo Project",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container py-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                {project.githubUrl && (
                  <Button asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="outline">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <ProjectImageGallery projectSlug={params.slug} images={[]} />

            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.technologies.map((tech, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <h3 className="font-semibold">{tech.name}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                    <Code className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Project Details</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Duration: {project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{project.team}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Related Projects</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(projects)
                    .filter(([slug]) => slug !== params.slug)
                    .slice(0, 3)
                    .map(([slug, proj]) => (
                      <Link
                        key={slug}
                        href={`/projects/${slug}`}
                        className="block p-2 rounded hover:bg-muted transition-colors"
                      >
                        <div className="font-medium text-sm">{proj.title}</div>
                        <div className="text-xs text-muted-foreground line-clamp-2">{proj.description}</div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
