'use client'
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { CalendarHeader } from "@/components/calendar/CalendarHeader";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { CalendarView, CalendarEvent } from "@/lib/types";
import { mockEvents } from "@/lib/mock-events";
import { toast } from "@/components/ui/use-toast";
import { startOfWeek, endOfWeek, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths } from "date-fns";
import { TaskSidebar } from "@/components/TaskSidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<CalendarView>("week");
  const [events, setEvents] = useState<CalendarEvent[]>(mockEvents);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", tag: "personal", period: "day" });

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile) {
      setView("day");
    }
    // Optionally, you can set view back to a default like 'month' when not mobile
    // else {
    //   setView("month");
    // }
  }, [isMobile]);


  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  const handleViewChange = (newView: CalendarView) => {
    if (!isMobile) {
      setView(newView);
    }
  };

  const handleAddEvent = (newEvent: Omit<CalendarEvent, 'id'>) => {
    const event: CalendarEvent = {
      ...newEvent,
      id: Math.random().toString(36).substr(2, 9)
    };
    setEvents([...events, event]);
    toast({
      title: "Event added",
      description: `${event.title} has been added to your calendar.`
    });
  };

  const navigateToToday = () => {
    setCurrentDate(new Date());
  };

  const navigatePrevious = () => {
    switch (view) {
      case "day":
        setCurrentDate(subDays(currentDate, 1));
        break;
      case "week":
        setCurrentDate(subWeeks(currentDate, 1));
        break;
      case "month":
        setCurrentDate(subMonths(currentDate, 1));
        break;
    }
  };

  const navigateNext = () => {
    switch (view) {
      case "day":
        setCurrentDate(addDays(currentDate, 1));
        break;
      case "week":
        setCurrentDate(addWeeks(currentDate, 1));
        break;
      case "month":
        setCurrentDate(addMonths(currentDate, 1));
        break;
    }
  };

  const handleAddTask = () => {
    // Logic to add the new task
    setDialogOpen(false);
  };

  return (
    <div className="flex h-screen bg-white  font-outfit">
      <TaskSidebar /> {/* Add the TaskSidebar here */}
      <div className="flex-1 flex flex-col  bg-white">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold">Calendar</h1>
          <Button variant="ghost" size="icon" onClick={() => setDialogOpen(true)}>
            <Plus className="h-6 w-6" />
          </Button>
        </div>
        <CalendarHeader
          currentDate={currentDate}
          view={view}
          onViewChange={handleViewChange}
          onDateChange={handleDateChange}
          onAddEvent={handleAddEvent}
          onNavigateToday={navigateToToday}
          onNavigateNext={navigateNext}
          onNavigatePrevious={navigatePrevious}
        />
        <CalendarGrid 
          currentDate={currentDate} 
          events={events}
          view={view}
        />
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogDescription>Fill in the details below to add a new task.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input 
              placeholder="Title" 
              value={newTask.title} 
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} 
            />
            <Select 
              value={newTask.tag} 
              onValueChange={(value) => setNewTask({ ...newTask, tag: value })}
            >
              <SelectTrigger>Tag</SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="work">Work</SelectItem>
              </SelectContent>
            </Select>
            <Select 
              value={newTask.period} 
              onValueChange={(value) => setNewTask({ ...newTask, period: value })}
            >
              <SelectTrigger>Period</SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button onClick={handleAddTask}>Add Task</Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;