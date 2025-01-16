'use client'
import { use, useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, ChevronDown } from "lucide-react"
import Link from "next/link"
import { ProjectTaskBoard } from "@/components/work/ProjectTaskBoard"
import { SearchBar } from "@/components/work/SearchBar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import AddProjectTask from "@/components/modals/AddProjectTask"

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const resolvedParams = use(params)

  // Mock project data - replace with real data fetch
  const mockProject = {
    id: resolvedParams.projectId,
    title: 'Website Redesign',
    description: 'Redesigning the company website with new brand guidelines',
  }

  const [isAddTaskOpen, setIsAddTaskOpen] = useState<boolean>(false)

  const openAddTaskModal = () => {
    setIsAddTaskOpen(true)
  }

  const closeAddTaskModal = (open: boolean) => {
    setIsAddTaskOpen(open)
  }

  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-secondary-dark">{mockProject.title}</h1>
            <p className="text-muted-foreground">Today is {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <Button className="rounded-full bg-black text-white" onClick={openAddTaskModal}>
            <Plus className="mr-1 h-4 w-4 " />
            Create task
          </Button>
          <AddProjectTask isOpen={isAddTaskOpen} onClose={closeAddTaskModal} />
        </div>
      </div>

      <ProjectTaskBoard projectId={resolvedParams.projectId} />
      
    </div>
  )
}