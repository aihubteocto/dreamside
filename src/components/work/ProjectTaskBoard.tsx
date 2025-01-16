'use client'
import { TaskCard } from "./TaskCard"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import AddProjectTask from "../modals/AddProjectTask"

export type TaskStatus = 'Will Do' | 'In Progress' | 'Completed'
export type ProjectTask = {
  id: string
  title: string
  description: string
  tags: string[]
  isDone: boolean
  status: TaskStatus
}
const INITIAL_TASKS: ProjectTask[] = [
  {
    id: '1',
    title: 'Search inspirations for upcoming project',
    description: 'Note: They like our behance project',
    tags: ['website', 'client'],
    isDone: false,
    status: 'Will Do',
  },
  {
    id: '2',
    title: 'Design CRM shop product page responsive website',
    description: 'Have to finish this before weekend',
    tags: ['products', 'client'],
    isDone: false,
    status: 'In Progress',
  },
  {
    id: '3',
    title: 'Affitto product full service',
    description: '',
    tags: ['mobile app', 'client'],
    isDone: true,
    status: 'Completed',
  },
  {
    id: '4',
    title: 'Affitto product full service',
    description: '',
    tags: ['mobile app', 'client'],
    isDone: true,
    status: 'Completed',
  },
]
interface ProjectTaskBoardProps {
  projectId: string
}
export function ProjectTaskBoard({ projectId }: ProjectTaskBoardProps) {
  const [tasks, setTasks] = useState<ProjectTask[]>(INITIAL_TASKS)
  const [isAddTaskOpen, setIsAddTaskOpen] = useState<boolean>(false)
  const [defaultStatus, setDefaultStatus] = useState<TaskStatus>('In Progress')

  const toggleTaskDone = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
            ...task,
            isDone: !task.isDone,
            status: !task.isDone ? 'Completed' : 'In Progress', // Update status based on isDone
          }
          : task
      )
    )
  }

  const openAddTaskModal = (status: TaskStatus) => {
    setDefaultStatus(status)
    setIsAddTaskOpen(true)
  }

  const closeAddTaskModal = (open: boolean) => {
    setIsAddTaskOpen(open)
  }

  // Define categories
  const categories: TaskStatus[] = ['Will Do', 'In Progress', 'Completed']

  // Sort tasks into categories
  const categorizedTasks = categories.map((category) => ({
    category,
    tasks: tasks.filter((task) => task.status === category),
  }))

  return (
    <div className="p-4">
      {categorizedTasks.map(({ category, tasks }) => (
        <div key={category} className="mb-6">
          <div className="flex items-center  mb-2">
            <h2 className="text-xl font-semibold">{category}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => openAddTaskModal(category)}
              className="p-1 ml-4 rounded-full bg-secondary-dark/10 hover:bg-gray-200"
            >
              <Plus className="w-2 h-2" />
            </Button>
          </div>
          {tasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} onToggleDone={toggleTaskDone} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No tasks in this category.</p>
          )}
        </div>
      ))}
      <AddProjectTask isOpen={isAddTaskOpen} onClose={closeAddTaskModal} defaultStatus={defaultStatus} />
    </div>
  )
}