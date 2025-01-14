'use client'
import { TaskColumn } from "./TaskColumn"
import { useState } from "react"

export type TaskStatus = 'todo' | 'in-progress' | 'done'

export type ProjectTask = {
  id: string
  title: string
  description: string
  tags: string[]
  progress: number
  assignees: string[]
  comments: number
  attachments: number
}

const INITIAL_TASKS: Record<TaskStatus, ProjectTask[]> = {
  'todo': [
    {
      id: '1',
      title: 'Search inspirations for upcoming project',
      description: 'Note: They like our behance project',
      tags: ['website', 'client'],
      progress: 40,
      assignees: ['1', '2', '3'],
      comments: 12,
      attachments: 8,
    }
  ],
  'in-progress': [
    {
      id: '2',
      title: 'Design CRM shop product page responsive website',
      description: 'Have to finish this before weekend',
      tags: ['products', 'client'],
      progress: 90,
      assignees: ['1', '2'],
      comments: 6,
      attachments: 1,
    }
  ],
  'done': [
    {
      id: '4',
      title: 'Affitto product full service',
      description: '',
      tags: ['mobile app', 'client'],
      progress: 100,
      assignees: ['1', '2'],
      comments: 7,
      attachments: 2,
    }
  ],
}

interface ProjectTaskBoardProps {
  projectId: string
}

export function ProjectTaskBoard({ projectId }: ProjectTaskBoardProps) {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  return (
    <div className="flex gap-6 h-full overflow-x-auto pb-6">
      <TaskColumn 
        title="Todo list" 
        tasks={tasks.todo}
        status="todo"
      />
      <TaskColumn 
        title="In Progress" 
        tasks={tasks["in-progress"]}
        status="in-progress"
      />
      <TaskColumn 
        title="Done" 
        tasks={tasks.done}
        status="done"
      />
    </div>
  )
}