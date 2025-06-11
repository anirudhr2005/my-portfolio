import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const techStack = [
  { name: "C++", level: 90, color: "bg-blue-500" },
  { name: "JavaScript/Node.js", level: 85, color: "bg-yellow-500" },
  { name: "React/Next.js", level: 80, color: "bg-cyan-500" },
  { name: "Python", level: 75, color: "bg-green-500" },
  { name: "Data Analysis", level: 70, color: "bg-purple-500" },
  { name: "Algorithm Design", level: 85, color: "bg-red-500" },
  { name: "System Design", level: 75, color: "bg-orange-500" },
  { name: "Hardware Integration", level: 65, color: "bg-pink-500" },
]

export default function TechStackShowcase() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Technical Proficiency</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {techStack.map((tech) => (
          <div key={tech.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{tech.name}</span>
              <Badge variant="secondary">{tech.level}%</Badge>
            </div>
            <Progress value={tech.level} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
