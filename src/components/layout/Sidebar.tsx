import { Calendar, Briefcase, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { icon: Calendar, label: "Planner", href: "/" },
  { icon: Briefcase, label: "Work", href: "/work" },
  { icon: User, label: "Personal", href: "/personal" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-outfit font-semibold text-primary-dark">Dashboard</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-2.5 rounded-lg",
                  "text-gray-700 hover:bg-primary hover:bg-opacity-10 hover:text-primary-dark",
                  "transition-all duration-200"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-outfit">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-4 py-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-outfit font-medium text-sm">Antonio Larentio</p>
            <p className="text-xs text-gray-500">Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}