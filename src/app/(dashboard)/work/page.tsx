'use client'
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { WorkProjects } from "@/components/work/WorkProject"

export default function WorkPage() {
  return (
    <div className="flex-1 flex flex-col p-6 gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-primary-dark">Work Dashboard</h1>
          <p className="text-muted-foreground">Manage your projects and tasks</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <WorkProjects />
    </div>
  )
}