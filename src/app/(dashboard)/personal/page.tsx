'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalRoutines } from "@/components/personal/PersonalRoutines"
import { PersonalHabits } from "@/components/personal/PersonalHabits"
import { PersonalTasks } from "@/components/personal/PersonalTasks"

export default function PersonalPage() {
  return (
    <div className="flex-1 flex flex-col p-6 gap-6">
      <div>
        <h1 className="text-3xl font-semibold text-primary-dark">Personal Dashboard</h1>
        <p className="text-muted-foreground">Manage your routines, habits, and tasks</p>
      </div>

      <Tabs defaultValue="routines" className="flex-1">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="routines">Routines</TabsTrigger>
          <TabsTrigger value="habits">Habits</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        <TabsContent value="routines">
          <PersonalRoutines />
        </TabsContent>
        <TabsContent value="habits">
          <PersonalHabits />
        </TabsContent>
        <TabsContent value="tasks">
          <PersonalTasks />
        </TabsContent>
      </Tabs>
    </div>
  );
}