'use client'
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { CalendarHeader } from "@/components/calendar/CalendarHeader";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { CalendarView, CalendarEvent } from "@/lib/types";
import { mockEvents } from "@/lib/mock-events";
import { toast } from "@/components/ui/use-toast";
import { startOfWeek, endOfWeek, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths } from "date-fns";

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<CalendarView>("week");
  const [events, setEvents] = useState<CalendarEvent[]>(mockEvents);

  const handleDateChange = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  const handleViewChange = (newView: CalendarView) => {
    setView(newView);
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

  return (
    <div className="flex h-screen bg-secondary font-outfit">
      
      <div className="flex-1 flex flex-col bg-white">
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
    </div>
  );
};

export default Index;