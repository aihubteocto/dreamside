import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ProjectTask } from "./ProjectTaskBoard"
import { Badge } from "@/components/ui/badge"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface TaskCardProps {
  task: ProjectTask
  onToggleDone: (taskId: string) => void
}

export function TaskCard({ task, onToggleDone }: TaskCardProps) {
  // Function to get badge classes based on task status
  const getBadgeClasses = (status: ProjectTask['status']) => {
    switch (status) {
      case 'Will Do':
        return 'bg-blue-100 text-black border border-blue-300'
      case 'In Progress':
        return 'bg-yellow-100 text-black border border-yellow-300'
      case 'Completed':
        return 'bg-green-500 text-white'
      default:
        return 'bg-transparent text-gray-800'
    }
  }

  return (
    <Card
      className={`group hover:shadow-md transition-shadow ${
        task.isDone ? 'bg-green-400/40' : ''
      }`}
    >
      <CardHeader className="p-4 flex justify-between items-start">
        <div className="flex items-center">
          <Checkbox
            checked={task.isDone}
            onCheckedChange={() => onToggleDone(task.id)}
            className="mr-2"
          />
          <div>
            <h4 className={`font-medium leading-tight ${task.isDone ? 'line-through' : ''}`}>
              {task.title}
            </h4>
            <Badge className={getBadgeClasses(task.status)}>
              {task.status}
            </Badge>
          </div>
        </div>
        {/* Optionally, you can enable the MoreVertical button if needed */}
        {/* <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
          <MoreVertical className="h-4 w-4" />
        </Button> */}
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {task.description && (
          <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {task.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}