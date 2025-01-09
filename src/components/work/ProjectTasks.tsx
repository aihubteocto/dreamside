'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

type Task = {
  id: string
  title: string
  description: string
  completed: boolean
  dueDate: string
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design Homepage',
    description: 'Create new homepage layout following brand guidelines',
    completed: false,
    dueDate: '2024-03-20',
  },
  {
    id: '2',
    title: 'Implement Navigation',
    description: 'Build responsive navigation menu',
    completed: true,
    dueDate: '2024-03-15',
  },
]

export function ProjectTasks({ projectId }: { projectId: string }) {
  return (
    <div className="space-y-4">
      {mockTasks.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Checkbox checked={task.completed} />
              <div className="flex-1">
                <CardTitle className="text-lg">{task.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{task.description}</p>
              </div>
              <div className="text-sm text-muted-foreground">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}