'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ProjectMenu } from "../ProjectMenu"

// ... existing imports ...

type Project = {
  id: string
  title: string
  description: string
  progress: number
  totalTasks: number
  completedTasks: number
  lastActivity: string
  team: Array<{ id: string, avatar: string }> // Add team members
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Video Campaign',
    description: '- Application Concept\n- Website Concept',
    progress: 65,
    totalTasks: 12,
    completedTasks: 8,
    lastActivity: '16/02/2025',
    team: [
      { id: '1', avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' },
    ],
  },

  {
    id: '2',
    title: 'Video Campaign',
    description: '- Application Concept\n- Website Concept',
    progress: 65,
    totalTasks: 12,
    completedTasks: 8,
    lastActivity: '16/02/2025',
    team: [
      { id: '1', avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' },
    ],
  },

  {
    id: '3',
    title: 'Video Campaign',
    description: '- Application Concept\n- Website Concept',
    progress: 65,
    totalTasks: 12,
    completedTasks: 8,
    lastActivity: '16/02/2025',
    team: [
      { id: '1', avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' },
    ],
  },
  {
    id: '4',
    title: 'Video Campaign',
    description: '- Application Concept\n- Website Concept',
    progress: 65,
    totalTasks: 12,
    completedTasks: 8,
    lastActivity: '16/02/2025',
    team: [
      { id: '1', avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' },
    ],
  },
  // ... other mock projects ...
]

export function WorkProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockProjects.map((project) => (
        <Link href={`/work/${project.id}`} key={project.id}>
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-medium">{project.title}</CardTitle>
              <CardDescription className="whitespace-pre-line">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex -space-x-2">
                {project.team.map((member) => (
                  <img
                    key={member.id}
                    src={member.avatar}
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="bg-secondary-dark text-white px-4 py-2 rounded-full">{project.lastActivity}</span>
                <div className="flex items-center gap-2">
                  <button className="hover:text-yellow-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </button>
              
                  <ProjectMenu 
                  onEdit={() => console.log('Edit project:', project.id)}
                  onDelete={() => console.log('Delete project:', project.id)}
                />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}