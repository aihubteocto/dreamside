import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ProjectTask } from "./ProjectTaskBoard"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Paperclip, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface TaskCardProps {
  task: ProjectTask
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="flex gap-2">
              {task.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  #{tag}
                </Badge>
              ))}
            </div>
            <h4 className="font-medium leading-tight">{task.title}</h4>
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {task.description && (
          <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
        )}
        <div className="space-y-4">
          {task.progress > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{task.progress}%</span>
              </div>
              <Progress value={task.progress} className="h-2" />
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {task.assignees.map((assignee) => (
                <div
                  key={assignee}
                  className="h-8 w-8 rounded-full bg-primary-dark text-white flex items-center justify-center text-sm border-2 border-white"
                >
                  {assignee[0]}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">{task.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Paperclip className="h-4 w-4" />
                <span className="text-sm">{task.attachments}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}