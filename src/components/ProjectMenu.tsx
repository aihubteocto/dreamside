'use client'
import { MoreVertical, Pencil, Trash } from "lucide-react"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface ProjectMenuProps {
  onEdit?: () => void
  onDelete?: () => void
}

export function ProjectMenu({ onEdit, onDelete }: ProjectMenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button 
          className="hover:text-gray-700 outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="z-50 min-w-[160px] bg-white rounded-md p-1 shadow-lg border border-gray-200"
          sideOffset={5}
          align="end"
          onClick={(e) => e.stopPropagation()}
        >
          <DropdownMenu.Item 
            className="flex items-center px-2 py-2 text-sm outline-none cursor-pointer hover:bg-gray-100 rounded-sm"
            onSelect={(e) => {
              e.preventDefault()
              onEdit?.()
            }}
          >
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </DropdownMenu.Item>

          <DropdownMenu.Item 
            className="flex items-center px-2 py-2 text-sm outline-none cursor-pointer hover:bg-gray-100 rounded-sm text-red-600"
            onSelect={(e) => {
              e.preventDefault()
              onDelete?.()
            }}
          >
            <Trash className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}