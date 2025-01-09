'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from "lucide-react"

type Task = {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    completed: false,
    dueDate: '2024-03-20',
    priority: 'high',
  },
  // Add more mock tasks as needed
];

export function PersonalTasks() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center space-x-4 p-2 rounded-lg hover:bg-accent"
              >
                <Checkbox checked={task.completed} />
                <div className="flex-1">
                  <p className={task.completed ? "line-through text-muted-foreground" : ""}>
                    {task.title}
                  </p>
                  <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                </div>
                <div className={`
                  px-2 py-1 rounded-full text-xs
                  ${task.priority === 'high' ? 'bg-red-100 text-red-800' : ''}
                  ${task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${task.priority === 'low' ? 'bg-green-100 text-green-800' : ''}
                `}>
                  {task.priority}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}