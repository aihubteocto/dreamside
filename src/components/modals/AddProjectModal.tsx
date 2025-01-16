'use client'
import { useState } from "react";

import Modal from "@/components/modals/Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { CalendarIcon, TagIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: (open: boolean) => void;
}

interface Project {
    name: string;
    status: 'Ongoing' | 'Upcoming' | 'Completed';
    dueDate?: string;
}

interface StatusButtonProps {
    value: 'Ongoing' | 'Upcoming' | 'Completed';
    selected: boolean;
    onClick: (value: 'Ongoing' | 'Upcoming' | 'Completed') => void;
    children: React.ReactNode;
}

const StatusButton = ({ value, selected, onClick, children }: StatusButtonProps) => (
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

const AddProjectModal = ({ isOpen, onClose }: AddProjectModalProps) => {
    const [newProject, setNewProject] = useState<Project>({ name: "", status: 'Ongoing', dueDate: "" });

    const handleAddProject = () => {
        if (!newProject.name || !newProject.status) {
            // Handle validation errors
            alert("Please fill in all mandatory fields.");
            return;
        }
        // Logic to add the new project
        console.log("Project Added:", newProject);
        onClose(false);
    };

    const footer = (
        <>
            <Button type="submit" className="bg-black text-white hover:bg-black/90 rounded-full px-6" onClick={handleAddProject}>Add Project</Button>
            <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
            </DialogClose>
        </>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add New Project"
            description="Fill in the details below to add a new project."
            footer={footer}
        >
            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Project Name</label>
                    <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Enter project name"
                        className="mt-1 text-xl font-semibold bg-secondary border-none p-4 focus-visible:ring-0 placeholder:text-gray-400"
                        value={newProject.name}
                        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    />
                </div>

                <div className="flex  items-center gap-2">
                <TagIcon className="w-5 h-5 text-gray-500 mr-2" /> 
                    
                    <span className="block text-sm font-medium text-gray-700">Status</span>
                    <div className=" flex  space-x-2">
                        <StatusButton
                            value="Ongoing"
                            selected={newProject.status === 'Ongoing'}
                            onClick={(value) => setNewProject({ ...newProject, status: value })}
                        >
                            Ongoing
                        </StatusButton>
                        <StatusButton
                            value="Upcoming"
                            selected={newProject.status === 'Upcoming'}
                            onClick={(value) => setNewProject({ ...newProject, status: value })}
                        >
                            Upcoming
                        </StatusButton>
                        <StatusButton
                            value="Completed"
                            selected={newProject.status === 'Completed'}
                            onClick={(value) => setNewProject({ ...newProject, status: value })}
                        >
                            Completed
                        </StatusButton>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                   
                    <div className="mt-1 flex items-center">
                        <CalendarIcon className="w-5 h-5 text-gray-500 mr-2" />
                        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
                        <Input 
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            placeholder="Select due date"
                            className="text-xl font-semibold bg-secondary border-none p-4 focus-visible:ring-0"
                            value={newProject.dueDate}
                            onChange={(e) => setNewProject({ ...newProject, dueDate: e.target.value })}
                        />
                    </div>
                    
                </div>
            </div>
        </Modal>
    );
};

export default AddProjectModal;