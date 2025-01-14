import { useState } from "react";
import { Checkbox } from './ui/checkbox';
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export function TaskSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="lg:hidden p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6" /> : <div className="w-6 h-6" />}
            </button>

            {/* Task Sidebar */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 z-50 w-54 bg-secondary-dark text-white flex flex-col transition-transform transform lg:transform-none lg:static",
                    isOpen ? "translate-x-0" : "translate-x-full",
                    "lg:w-64"
                )}
            >
                <div className="p-4 pt-8 flex-1 overflow-y-auto">
                    <div className="mb-6 mt-2">
                        <h2 className="text-lg font-semibold">Todos</h2>
                    </div>
                    <div className="p-4 bg-[#c3c3c3] rounded-lg mb-4">
                        <h3 className="text-sm font-medium text-dark">This week</h3>
                        <ul className="mt-2 space-y-2">
                            {[
                                "Design session",
                                "Design onboarding",
                                "Blog post",
                                "Lunch break",
                                "Todo",
                            ].map((task) => (
                                <li key={task} className="flex items-center">
                                    <Checkbox className="mr-2" />
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-4 bg-[#c3c3c3] rounded-lg">
                        <h3 className="text-sm font-medium text-dark">This month</h3>
                        <ul className="mt-2 space-y-2">
                            {[
                                "Write Offer",
                                "Pet meet up",
                                "Book storage",
                                "Todo",
                            ].map((task) => (
                                <li key={task} className="flex items-center">
                                    <Checkbox className="mr-2" />
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}