import { CalendarEvent } from "@/lib/types";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { AddEventDialog } from "../AddEventDialog";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

interface DayViewProps {
  currentDate: Date;
  events: CalendarEvent[];
}

const hours = Array.from({ length: 24 }, (_, i) => i);

const categoryColors: Record<CalendarEvent['category'], string> = {
  work: 'bg-blue-100 border-blue-200',
  personal: 'bg-yellow-100 border-yellow-200',
  health: 'bg-pink-100 border-pink-200',
};


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function DayView({ currentDate, events }: DayViewProps) {
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const getEventsForDay = (date: Date) => {
    return events.filter(event => format(event.start, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
  };

  const getEventStyle = (event: CalendarEvent) => {
    const startHour = event.start.getHours();
    const endHour = event.end.getHours();
    const duration = endHour - startHour;
    const top = `${startHour * 5}rem`;
    const height = `${duration * 5}rem`;
    
    return {
      top,
      height,
      position: 'absolute',
      left: '4px',
      right: '4px',
      zIndex: 10
    } as React.CSSProperties;
  };

  const handleSlotClick = (hour: number) => {
    const date = new Date(currentDate);
    date.setHours(hour, 0, 0, 0);
    setSelectedSlot(date);
    setDialogOpen(true);
  };

  return (
    <div className="flex flex-col px-4 sm:px-14">
      {/* Week days header */}
      <div className="grid grid-cols-8 gap-2 mb-4">
        <div className="p-4 flex items-center justify-center">
          <CalendarIcon className="w-6 h-6 text-secondary-dark" />
        </div>
        {weekDays.map((day, index) => {
          const isCurrentDay = currentDate.getDay() === index;
          return (
            <div
              key={day}
              className={cn(
                "py-4 px-2 text-center rounded-2xl font-medium transition-colors mb-5",
                isCurrentDay ? "bg-secondary-dark text-white" : "bg-secondary"
              )}
            >
              <div className="text-4xl font-bold">{format(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + index), 'd')}</div>
              <div className="text-sm mb-1">{day}</div>
            </div>
          );
        })}
      </div>

      {/* Time grid */}
      <div className="grid grid-cols-[60px_1fr] bg-secondary rounded-3xl h-auto overflow-y-auto scrollbar-none">
        <div className="border-r border-gray-100">
          {hours.map((hour) => (
            <div key={hour} className="h-20 p-2 text-sm text-gray-500 font-outfit">
              {`${hour}:00`}
            </div>
          ))}
        </div>
        <div className="relative">
          {hours.map((hour) => (
            <div key={hour} className="h-20 border-b border-gray-100 relative group">
              <Popover>
                <PopoverTrigger asChild>
                  <button 
                    className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-primary w-6 h-6 rounded-full hover:bg-primary/10 flex items-center justify-center"
                    onClick={() => handleSlotClick(hour)}
                  >
                    +
                  </button>
                </PopoverTrigger>
                {selectedSlot && selectedSlot.getHours() === hour && (
                  <PopoverContent className="w-80">
                    <AddEventDialog 
                      open={dialogOpen} 
                      onOpenChange={setDialogOpen}
                      defaultDate={selectedSlot}
                    />
                  </PopoverContent>
                )}
              </Popover>
            </div>
          ))}
          {getEventsForDay(currentDate).map((event) => (
            <div
              key={event.id}
              style={getEventStyle(event)}
              className={cn(
                "rounded-lg p-2 border text-sm overflow-hidden",
                categoryColors[event.category]
              )}
            >
              <div className="font-medium">{event.title}</div>
              <div className="text-xs text-gray-600">
                {format(event.start, 'HH:mm')} - {format(event.end, 'HH:mm')}
              </div>
              {event.location && (
                <div className="text-xs text-gray-600">{event.location}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AddEventDialog for mobile can also be styled if needed */}
      {selectedSlot && (
        <AddEventDialog 
          open={dialogOpen} 
          onOpenChange={setDialogOpen}
          defaultDate={selectedSlot}
        />
      )}
    </div>
  );
}