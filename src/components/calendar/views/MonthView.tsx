import { CalendarEvent } from "@/lib/types";
import { format, startOfMonth, startOfWeek, addDays, isSameDay, getWeeksInMonth } from "date-fns";
import { cn } from "@/lib/utils";
import { AddEventDialog } from "../AddEventDialog";
import { useState } from "react";

interface MonthViewProps {
  currentDate: Date;
  events: CalendarEvent[];
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const categoryColors: Record<CalendarEvent['category'], string> = {
  work: 'bg-blue-100 border-blue-200',
  personal: 'bg-yellow-100 border-yellow-200',
  health: 'bg-pink-100 border-pink-200',
};


export function MonthView({ currentDate, events }: MonthViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const monthStart = startOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const weeksInMonth = getWeeksInMonth(currentDate);
  const weeks = Array.from({ length: weeksInMonth }, (_, weekIndex) => {
    return Array.from({ length: 7 }, (_, dayIndex) => {
      return addDays(startDate, weekIndex * 7 + dayIndex);
    });
  });

  const getEventsForDay = (date: Date) => {
    return events.filter(event => isSameDay(event.start, date));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setDialogOpen(true);
  };

  return (
    <div className="flex-1 px-14">
      <div className="grid grid-cols-7 gap-2 p-4">
        {days.map(day => (
          <div key={day} className="text-center  mb-8  p-6 bg-secondary rounded-lg font-medium  text-secondary-dark text-xl font-semibold">
            {day}
          </div>
        ))}
        {weeks.flat().map((date, i) => (
          <div
            key={i}
            className={cn(
              "min-h-[100px] p-2 border-b border-gray-100 rounded-lg relative group",
              isSameDay(date, new Date()) && "bg-[#b591ef]/10",
              "hover:bg-gray-50 transition-colors duration-200"
            )}
            onClick={() => handleDateClick(date)}
          >
            <div className="text-xl font-medium mb-2">{format(date, 'd')}</div>
            <div className="space-y-1">
              {getEventsForDay(date).map((event) => (
                <div
                  key={event.id}
                  className={cn(
                    "text-xs p-1 rounded truncate",
                    categoryColors[event.category]
                  )}
                >
                  {event.title}
                </div>
              ))}
            </div>
            <button className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 text-2xl text-primary">
              +
            </button>
          </div>
        ))}
      </div>
      {selectedDate && (
        <AddEventDialog 
          open={dialogOpen} 
          onOpenChange={setDialogOpen}
          defaultDate={selectedDate}
        />
      )}
    </div>
  );
}