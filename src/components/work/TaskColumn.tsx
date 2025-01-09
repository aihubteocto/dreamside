import { TaskCard } from "./TaskCard"
import { Plus, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectTask, TaskStatus } from "./ProjectTaskBoard"

interface TaskColumnProps {
  title: string
  tasks: ProjectTask[]
  status: TaskStatus
}

export function TaskColumn({ title, tasks, status }: TaskColumnProps) {
  return (
    <div className="flex-1 min-w-[320px] max-w-[320px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-muted-foreground">({tasks.length})</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}