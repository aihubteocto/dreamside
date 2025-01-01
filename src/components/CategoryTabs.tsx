"use client";

import { Button } from "@/components/ui/button";

const categories = [
  "All Topics",
  "AI & Digital",
  "Development",
  "Marketing",
  "Personal Development",
  "Business",
  "Finance",
];

export const CategoryTabs = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
      {categories.map((category) => (
        <Button
          key={category}
          variant="secondary"
          className="bg-defbackground text-md text-textgrey font-semibold border-[#505050] border px-6 border-[1px] h-12 whitespace-nowrap rounded-full"
          size="sm"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};