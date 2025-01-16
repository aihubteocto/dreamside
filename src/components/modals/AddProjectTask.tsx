'use client'
import { useState, useEffect } from "react";

import Modal from "@/components/modals/Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { TagIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type TaskStatus = 'Will Do' | 'In Progress' | 'Completed';

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: (open: boolean) => void;
    defaultStatus?: TaskStatus;
}

interface Task {
    name: string;
    note?: string;
    tags: string[];
    status: TaskStatus;
}

interface TagInputProps {
    tags: string[];
    setTags: (tags: string[]) => void;
}

interface StatusButtonProps {
    value: TaskStatus;
    selected: boolean;
    onClick: (value: TaskStatus) => void;
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

const TagInput = ({ tags, setTags }: TagInputProps) => {
    const [input, setInput] = useState("");

    const addTag = () => {
        const trimmed = input.trim();
        if (trimmed && !tags.includes(trimmed) && tags.length < 2) {
            setTags([...tags, trimmed]);
            setInput("");
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-2">
            {tags.map(tag => (
                <span key={tag} className="flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                    {tag}
                    <button type="button" onClick={() => removeTag(tag)} className="ml-1 text-gray-500 hover:text-gray-700">&times;</button>
                </span>
            ))}
            {tags.length < 2 && (
                <Input
                    placeholder="Add tag"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="border-none focus-visible:ring-0"
                />
            )}
        </div>
    );
};

const AddProjectTask = ({ isOpen, onClose, defaultStatus = 'In Progress' }: AddTaskModalProps) => {
    const [newTask, setNewTask] = useState<Task>({ name: "", tags: [], status: defaultStatus });
    const [note, setNote] = useState<string>("");

    useEffect(() => {
        setNewTask((prevTask) => ({ ...prevTask, status: defaultStatus }));
    }, [defaultStatus]);

    const handleAddTask = () => {
        if (!newTask.name) {
            alert("Task name is mandatory.");
            return;
        }
        if (note.length > 100) {
            alert("Note cannot exceed 100 characters.");
            return;
        }
        // Logic to add the new task
        console.log("Task Added:", { ...newTask, note });
        onClose(false);
    };

    const handleStatusChange = (value: TaskStatus) => {
        setNewTask({ ...newTask, status: value });
    };

    const footer = (
        <>
            <Button type="submit" className="bg-black text-white hover:bg-black/90 rounded-full px-6" onClick={handleAddTask}>Add Task</Button>
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Task Name</label>
                    <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Enter task name"
                        className="mt-1 text-xl font-semibold bg-secondary border-none p-4 focus-visible:ring-0 placeholder:text-gray-400"
                        value={newTask.name}
                        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note (Optional)</label>
                    <Input 
                        id="note" 
                        name="note" 
                        placeholder="Add a note (max 100 characters)"
                        className="mt-1 text-md bg-secondary border-none p-4 focus-visible:ring-0 placeholder:text-gray-400"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        maxLength={100}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Tags (Max 2)</label>
                    <TagInput tags={newTask.tags} setTags={(tags) => setNewTask({ ...newTask, tags })} />
                </div>

                <div className="flex items-center gap-2">                    
                    <span className="block text-sm font-medium text-gray-700">Status</span>
                    <div className="mt-2 flex space-x-2">
                        <StatusButton
                            value="Will Do"
                            selected={newTask.status === 'Will Do'}
                            onClick={handleStatusChange}
                        >
                            Will Do
                        </StatusButton>
                        <StatusButton
                            value="In Progress"
                            selected={newTask.status === 'In Progress'}
                            onClick={handleStatusChange}
                        >
                            In Progress
                        </StatusButton>
                        <StatusButton
                            value="Completed"
                            selected={newTask.status === 'Completed'}
                            onClick={handleStatusChange}
                        >
                            Completed
                        </StatusButton>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddProjectTask;