import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        className="pl-9 w-[300px] rounded-full"
        placeholder="Find something"
        type="search"
      />
    </div>
  )
}