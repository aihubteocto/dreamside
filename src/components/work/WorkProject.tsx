'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ProjectMenu } from "../ProjectMenu"
import { Badge } from "@/components/ui/badge"
import { Circle, CheckCircle, Clock, Projector } from "lucide-react"

// ... existing imports ...

type Project = {
  id: string
  title: string
  description: string
  totalTasks: number
  completedTasks: number
  dateCreated: string
  priority: 'High' | 'Medium' | 'Low'
  status: 'Ongoing' | 'Completed' | 'Upcoming' // Added status
  team: Array<{ id: string, avatar: string }>
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Video Campaign',
    description: 'Short description for the Project',
    totalTasks: 12,
    completedTasks: 8,
    dateCreated: '16/02/2025',
    priority: 'High',
    status: 'Ongoing',
    team: [
      { id: '1', avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' },
    ],
  },
  {
    id: '2',
    title: 'Marketing Strategy',
    description: 'Develop a comprehensive marketing strategy',
    totalTasks: 15,
    completedTasks: 10,
    dateCreated: '20/03/2025',
    priority: 'Medium',
    status: 'Completed',
    team: [
      { id: '2', avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg' },
    ],
  },
  {
    id: '3',
    title: 'Website Redesign',
    description: 'Redesign the company website for better user experience',
    totalTasks: 20,
    completedTasks: 15,
    dateCreated: '01/04/2025',
    priority: 'High',
    status: 'Upcoming',
    team: [
      { id: '3', avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Red_dot.svg' },
    ],
  },
  {
    id: '4',
    title: 'Social Media Campaign',
    description: 'Launch a social media campaign to increase brand awareness',
    totalTasks: 10,
    completedTasks: 5,
    dateCreated: '15/05/2025',
    priority: 'Low',
    status: 'Ongoing',
    team: [
      { id: '4', avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' },
    ],
  },
]

export function WorkProjects({ filter }: { filter: string }) {
  const filteredProjects = mockProjects.filter((project) => {
    if (filter === 'All Projects') return true
    return project.status === filter.replace(' ', '')
  })

  const getBadgeClasses = (status: Project['status']) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-yellow-100 text-black'
      case 'Completed':
        return 'bg-green-500 text-white'
      case 'Upcoming':
        return 'bg-transparent text-black border border-gray-300'
      default:
        return 'bg-transparent text-gray-800'
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredProjects.map((project) => (
        <Link href={`/work/${project.id}`} key={project.id}>
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer border-gray-200">
            <CardHeader className="flex justify-between pb-4 pt-5">
              <div className="flex justify-between space-x-2">
                {project.status === 'Ongoing' && <Circle className="text-blue-500" />}
                {project.status === 'Completed' && <CheckCircle className="text-green-500" />}
                {project.status === 'Upcoming' && <Clock className="text-yellow-500" />}
                <div className="flex items-center">
                <Badge className={`${getBadgeClasses(project.status)} rounded-lg `}>
                    {project.status}
                  </Badge>                <ProjectMenu 
                onEdit={() => console.log('Edit project:', project.id)}
                onDelete={() => console.log('Delete project:', project.id)}
              />
                </div>
              </div>
        
            </CardHeader>
            <CardContent className="space-y-1 pb-4">
              <CardTitle className="text-lg font-medium">{project.title}</CardTitle>
              <div className="flex items-center space-x-2 text-gray-500">
              <Projector className="h-4 w-4" />

                <span>{project.totalTasks} Tasks</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Clock className="h-4 w-4" />
                <span>Today</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}