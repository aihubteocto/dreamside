'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Plus } from "lucide-react"

type Habit = {
  id: string;
  title: string;
  streak: number;
  target: number;
  progress: number;
}

const mockHabits: Habit[] = [
  {
    id: '1',
    title: 'Daily Reading',
    streak: 7,
    target: 30,
    progress: 23,
  },
  // Add more mock habits as needed
];

export function PersonalHabits() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Habits Tracker</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Habit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockHabits.map((habit) => (
          <Card key={habit.id}>
            <CardHeader>
              <CardTitle>{habit.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Current streak</span>
                <span className="font-semibold">{habit.streak} days</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{habit.progress}/{habit.target} days</span>
                </div>
                <Progress value={(habit.progress / habit.target) * 100} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}