import { useState } from "react";
import { Checkbox } from './ui/checkbox';
import { cn } from "@/lib/utils";
import { X, Plus } from "lucide-react"; // Combined imports
import { Button } from "@/components/ui/button";
import AddTaskPlannerModal from "./modals/AddTaskPlanner";

export function TaskSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState<string>("day"); // New state for period

    const openModalWithPeriod = (period: 'day' | 'week' | 'month') => {
        setSelectedPeriod(period);
        setIsModalOpen(true);
    };

    return (
        <>
            <AddTaskPlannerModal
                isOpen={isModalOpen}
                onClose={setIsModalOpen}
                defaultPeriod={selectedPeriod} // Pass the selected period
            />
            <button
                className="lg:hidden p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6 bg-primary" /> : <div className="w-6 h-6" />}
            </button>

            {/* Task Sidebar */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 z-50 w-54  text-black flex flex-col transition-transform transform lg:transform-none lg:static",
                    isOpen ? "translate-x-0" : "translate-x-full",
                    "lg:w-64"
                )}
            >
                <div className="p-4 pt-8 flex-1 overflow-y-auto">
                    <div className="mb-6 mt-2">

                        <div className="flex items-center justify-between p-4">
                            <h2 className="text-lg font-semibold">Todos</h2>

                            <Button variant="ghost" className="bg-secondary text-primary" size="sm" onClick={() => openModalWithPeriod("day")}>
                                <Plus className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                    <div className="p-4 bg-[#ACE7FB]/20 rounded-lg mb-4">
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
                            <li className="flex items-center justify-center mt-2">
                                <button
                                    onClick={() => openModalWithPeriod("week")}
                                    className="flex items-center text-blue-500 hover:text-blue-700"
                                >
                                    <Plus className="w-4 h-4 mr-1" /> Add Task
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 bg-[#ACE7FB]/20 rounded-lg">
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
                            <li className="flex items-center justify-center mt-2">
                                <button
                                    onClick={() => openModalWithPeriod("month")}
                                    className="flex items-center text-blue-500 hover:text-blue-700"
                                >
                                    <Plus className="w-4 h-4 mr-1" /> Add Task
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}