'use client'
import { useState, useEffect } from "react";

import Modal from "@/components/modals/Modal";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { TagIcon, CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface AddTaskPlannerModalProps {
    isOpen: boolean;
    onClose: (open: boolean) => void;
    defaultPeriod?: string; // Added optional prop
}

interface Task {
    title: string;
    tag: string;
    period: string;
}

interface CategoryButtonProps {
    value: 'personal' | 'work';
    selected: boolean;
    onClick: (value: 'personal' | 'work') => void;
    children: React.ReactNode;
}

interface PeriodButtonProps {
    value: 'day' | 'week' | 'month';
    selected: boolean;
    onClick: (value: 'day' | 'week' | 'month') => void;
    children: React.ReactNode;
}

const CategoryButton = ({ value, selected, onClick, children }: CategoryButtonProps) => (
    <button
        type="button"
        onClick={() => onClick(value)}
        className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
            selected ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
    >
        {children}
    </button>
);

const PeriodButton = ({ value, selected, onClick, children }: PeriodButtonProps) => (
    <button
        type="button"
        onClick={() => onClick(value)}
        className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
            selected ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
    >
        {children}
    </button>
);

const AddTaskPlannerModal = ({ isOpen, onClose, defaultPeriod = "day" }: AddTaskPlannerModalProps) => {
    const [newTask, setNewTask] = useState<Task>({ title: "", tag: "personal", period: defaultPeriod });

    useEffect(() => {
        setNewTask((prevTask) => ({ ...prevTask, period: defaultPeriod }));
    }, [defaultPeriod]);

    const handleAddTask = () => {
        // Logic to add the new task
        console.log("Task Added:", newTask);
        onClose(false);
    };

    const footer = (
        <>
            <Button type="submit"  className="bg-black text-white hover:bg-black/90 rounded-full px-6" onClick={handleAddTask}>Add Task</Button>
            <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
            </DialogClose>
        </>
    );

    return (
        <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Add New Task"
        description="Fill in the details below to add a new task."
        footer={footer}
    >
        <div className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <Input 
                    id="title" 
                    name="title" 
                    required 
                    placeholder="Add title"
                    className="mt-1 text-xl font-semibold bg-secondary border-none p-4 focus-visible:ring-0 placeholder:text-gray-400"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
            </div>

            <div className="flex items-center gap-2">                    
                
                <TagIcon className="w-5 h-5 text-gray-500 mr-2" /> 
            
                <div className="mt-2 flex space-x-2 gap-2">
                    <CategoryButton
                        value="personal"
                        selected={newTask.tag === 'personal'}
                        onClick={(value) => setNewTask({ ...newTask, tag: value })}
                    >
                        Personal
                    </CategoryButton>
                    <CategoryButton
                        value="work"
                        selected={newTask.tag === 'work'}
                        onClick={(value) => setNewTask({ ...newTask, tag: value })}
                    >
                        Work
                    </CategoryButton>
                </div>
            </div>

        
            

            <div className="flex items-center gap-2">                    
                    <CalendarIcon className="w-5 h-5 text-gray-500 mr-2" /> 
           
                <div className="mt-2 flex space-x-2">
                    <PeriodButton
                        value="day"
                        selected={newTask.period === 'day'}
                        onClick={(value) => setNewTask({ ...newTask, period: value })}
                    >
                        Day
                    </PeriodButton>
                    <PeriodButton
                        value="week"
                        selected={newTask.period === 'week'}
                        onClick={(value) => setNewTask({ ...newTask, period: value })}
                    >
                        Week
                    </PeriodButton>
                    <PeriodButton
                        value="month"
                        selected={newTask.period === 'month'}
                        onClick={(value) => setNewTask({ ...newTask, period: value })}
                    >
                        Month
                    </PeriodButton>
                </div>
            </div>
        </div>
    </Modal>
    );
};

export default AddTaskPlannerModal;