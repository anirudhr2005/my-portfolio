import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Code, BookOpen } from "lucide-react"

const achievements = [
  {
    year: "2024",
    title: "Advanced Full-Stack Development",
    description: "Built comprehensive chat application with real-time features",
    type: "project",
    icon: Code,
  },
  {
    year: "2024",
    title: "Hardware-Software Integration",
    description: "Successfully developed handwriting machine control software",
    type: "innovation",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Algorithm Mastery",
    description: "Implemented complex chess game with complete rule enforcement",
    type: "technical",
    icon: Code,
  },
  {
    year: "2023",
    title: "Market Analysis Excellence",
    description: "Conducted comprehensive Tesla market structure analysis",
    type: "academic",
    icon: BookOpen,
  },
  {
    year: "2023",
    title: "System Architecture Design",
    description: "Designed and built hotel management system from scratch",
    type: "project",
    icon: Code,
  },
]

const typeColors = {
  project: "bg-blue-500",
  innovation: "bg-purple-500",
  technical: "bg-green-500",
  academic: "bg-orange-500",
}

export default function AchievementTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Achievement Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`p-2 rounded-full ${typeColors[achievement.type]} text-white`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  {index < achievements.length - 1 && <div className="w-px h-12 bg-border mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline">{achievement.year}</Badge>
                    <Badge variant="secondary" className="capitalize">
                      {achievement.type}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
