'use client'
import { Button } from "@/components/ui/button"
import { ChevronLeft, Plus, Search } from "lucide-react"
import Link from "next/link"
import { ProjectTaskBoard } from "@/components/work/ProjectTaskBoard"
import { SearchBar } from "@/components/work/SearchBar"
import { use } from "react"

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const resolvedParams = use(params)
  
  // Mock project data - replace with real data fetch
  const mockProject = {
    id: resolvedParams.projectId,
    title: 'Website Redesign',
    description: 'Redesigning the company website with new brand guidelines',
  }

  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/work">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-semibold text-primary-dark">{mockProject.title}</h1>
            <p className="text-muted-foreground">Today is {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create task
          </Button>
        </div>
      </div>

      <ProjectTaskBoard projectId={resolvedParams.projectId} />
    </div>
  )
}