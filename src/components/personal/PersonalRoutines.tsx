'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

type Routine = {
  id: string;
  title: string;
  description: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening';
  tasks: string[];
}

const mockRoutines: Routine[] = [
  {
    id: '1',
    title: 'Morning Routine',
    description: 'Start the day right',
    timeOfDay: 'morning',
    tasks: ['Meditate', 'Exercise', 'Shower', 'Breakfast']
  },
  // Add more mock routines as needed
];

export function PersonalRoutines() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Daily Routines</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Routine
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockRoutines.map((routine) => (
          <Card key={routine.id}>
            <CardHeader>
              <CardTitle>{routine.title}</CardTitle>
              <CardDescription>{routine.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {routine.tasks.map((task, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}