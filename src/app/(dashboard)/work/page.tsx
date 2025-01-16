'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, ChevronDown } from "lucide-react"
import { WorkProjects } from "@/components/work/WorkProject"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import AddProjectModal from "@/components/modals/AddProjectModal"

export default function WorkPage() {
  const [filter, setFilter] = useState<string>('All Projects')
  const [isAddProjectOpen, setIsAddProjectOpen] = useState<boolean>(false)

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    // Implement filtering logic based on newFilter
  }

  const handleSort = (sortBy: string) => {
    // Implement sorting logic based on sortBy
    console.log('Sort by:', sortBy)
  }

  const openAddProjectModal = () => {
    setIsAddProjectOpen(true)
  }

  const closeAddProjectModal = (open: boolean) => {
    setIsAddProjectOpen(open)
  }

  return (
    <div className="flex-1 flex flex-col px-14 py-10 gap-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-semibold text-secondary-dark">Projects</h1>
        <div className="flex items-center space-x-4 ">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center rounded-xl">
                Sort By <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuItem onClick={() => handleSort('Name')}>Name</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort('Date')}>Date</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-black text-white rounded-xl" onClick={openAddProjectModal}>
            <Plus className="mr-1 h-4 w-4" />
            Add Project
          </Button>
          <AddProjectModal isOpen={isAddProjectOpen} onClose={closeAddProjectModal} />
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        {['All Projects', 'Completed', 'On Going', 'Upcoming'].map((status) => (
          <Button
            key={status}
            className={`rounded-xl hover:bg-secondary/70 ${filter === status ? "bg-black text-white" : 'text-secondary-dark/40'}`}
            variant={filter === status ? 'default' : 'outline'}
            onClick={() => handleFilterChange(status)}
          >
            {status}
          </Button>
        ))}
         
      </div>

      <WorkProjects filter={filter} />
    </div>
  )
}