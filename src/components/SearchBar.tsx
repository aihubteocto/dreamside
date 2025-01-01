"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative max-w-xl mt-3 w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-[20px] w-[20px]" />
      <Input
        className="pl-10 bg-secondary/50 border-0 focus-visible:ring-1 rounded-full focus-visible:ring-primary"
        placeholder="Search for your next community..."
      />

      
    </div>
  );
};