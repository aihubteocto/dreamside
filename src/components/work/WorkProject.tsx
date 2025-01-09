'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

type Project = {
  id: string
  title: string
  description: string
  progress: number
  totalTasks: number
  completedTasks: number
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Website Redesign',
    description: 'Redesigning the company website with new brand guidelines',
    progress: 65,
    totalTasks: 12,
    completedTasks: 8,
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Building a new mobile app for client management',
    progress: 30,
    totalTasks: 20,
    completedTasks: 6,
  },
]

export function WorkProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockProjects.map((project) => (
        <Link href={`/work/${project.id}`} key={project.id}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{project.completedTasks}/{project.totalTasks} tasks</span>
                </div>
                <Progress value={project.progress} />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}