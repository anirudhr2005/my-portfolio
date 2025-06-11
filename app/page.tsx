import Link from "next/link"
import EnhancedProjectCard from "@/components/enhanced-project-card"
import { Badge } from "@/components/ui/badge"
import AnimatedHero from "@/components/animated-hero"
import ScrollReveal from "@/components/scroll-reveal"
import EnhancedContactForm from "@/components/enhanced-contact-form"
import TechStackShowcase from "@/components/tech-stack-showcase"
import CertificationsShowcase from "@/components/certifications-showcase"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <section id="about" className="container py-12 md:py-24 lg:py-32">
        <ScrollReveal delay={200}>
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-8">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">About Me</h2>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <p className="leading-7 text-lg">
                    I am a dedicated and passionate B.Tech student specializing in Computer and Data Science. My
                    academic journey has been driven by a profound interest in data science, and I thrive on exploring
                    the endless possibilities that data-driven insights can bring to solving real-world problems.
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    I am enthusiastic about leveraging my knowledge and skills in data analysis and software development
                    to contribute to innovative projects and make a meaningful impact. I am particularly interested in
                    opportunities that allow me to grow and challenge myself while collaborating with like-minded
                    people.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>C++</Badge>
                    <Badge>Python</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Data Analysis</Badge>
                    <Badge>React</Badge>
                    <Badge>OOP</Badge>
                    <Badge>Algorithm Design</Badge>
                    <Badge>Full-stack Development</Badge>
                    <Badge>Hardware Integration</Badge>
                    <Badge>Artificial Intelligence</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <TechStackShowcase />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
        <ScrollReveal delay={300}>
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
            <CertificationsShowcase />
          </div>
        </ScrollReveal>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-12 md:py-24 lg:py-32">
        <ScrollReveal delay={400}>
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-8">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <EnhancedProjectCard
                title="Chat Application"
                description="Built a full-stack private chat app using Node.js and Next.js, focusing on clean design and real-time communication."
                tags={["Node.js", "Next.js", "Real-time", "Full-stack"]}
                image="/images/projects/chat-application/ai-interface.png"
                slug="chat-application"
              />
              <EnhancedProjectCard
                title="Tesla Market Analysis"
                description="Conducted an economic analysis of Tesla's market structure and created a SWOT analysis for academic coursework."
                tags={["Market Analysis", "SWOT", "Economic Analysis"]}
                image="/images/projects/tesla-market-analysis/tesla-logo.png"
                slug="tesla-market-analysis"
              />
              <EnhancedProjectCard
                title="Chess Game in C++"
                description="Developed a fully functional console-based Chess game using C++ with complete rules enforcement and OOP concepts."
                tags={["C++", "OOP", "Game Development", "Algorithms"]}
                image="/images/projects/chess-game/game-board.png"
                slug="chess-game"
              />
              <EnhancedProjectCard
                title="Hotel Management System"
                description="Created a console-based system to manage room bookings, check-ins, check-outs, and customer details using OOP principles."
                tags={["C++", "File Handling", "OOP", "System Design"]}
                image="/images/projects/hotel-management/main-interface.png"
                slug="hotel-management"
              />
              <EnhancedProjectCard
                title="Handwriting Machine"
                description="Developed control software for a handwriting pen plotter supporting multiple file formats and hardware-software integration."
                tags={["Hardware Integration", "Control Systems", "File Processing"]}
                image="/images/projects/handwriting-machine/machine-setup.png"
                slug="handwriting-machine"
              />
              <EnhancedProjectCard
                title="AutoCorrect Tool"
                description="Created a tool to detect and correct spelling errors using Levenshtein Distance algorithm, providing suggestions from a dictionary."
                tags={["Algorithms", "NLP", "Tool Development"]}
                image="/images/projects/autocorrect-tool/tool-interface.png"
                slug="autocorrect-tool"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
        <EnhancedContactForm />
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Anirudh Rajgopal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
