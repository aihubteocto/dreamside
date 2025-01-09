import { CalendarEvent } from "@/lib/types";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { AddEventDialog } from "../AddEventDialog";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";

interface WeekViewProps {
  currentDate: Date;
  events: CalendarEvent[];
}

const hours = Array.from({ length: 24 }, (_, i) => i);

const categoryColors = {
  work: 'bg-blue-100 border-blue-200',
  personal: 'bg-yellow-100 border-yellow-200',
  health: 'bg-pink-100 border-pink-200'
};

export function WeekView({ currentDate, events }: WeekViewProps) {
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const weekStart = startOfWeek(currentDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

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

  const handleSlotClick = (date: Date, hour: number) => {
    const newDate = new Date(date);
    newDate.setHours(hour, 0, 0, 0);
    setSelectedSlot(newDate);
    setDialogOpen(true);
  };

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  return (
    <div className="flex-1 overflow-auto px-14 " >
      <div className="grid grid-cols-8 gap-2  mb-4">
      <div className="p-4 flex items-center justify-center">
          <CalendarIcon className="w-6 h-6 text-secondary-dark" />
        </div>
        {weekDays.map((day) => {
          const isSelected = selectedDay && isSameDay(day, selectedDay);
          const isToday = isSameDay(day, new Date());
          return (
            <button
              key={day.toString()}
              onClick={() => handleDayClick(day)}
              className={cn(
                "py-4 px-2 text-center rounded-2xl font-medium transition-colors mb-5",
                isSelected ? "bg-secondary-dark text-white" : "bg-secondary hover:bg-secondary/80",
                isToday && !isSelected && "border-2 border-secondary-dark"
              )}
            >
              <div className="text-sm mb-1">{format(day, 'EEEE')}</div>
              <div className="text-3xl font-bold">{format(day, 'd')}</div>
            </button>
          );
        })}
      </div>
      
      <div className="grid grid-cols-8 bg-secondary rounded-3xl h-[calc(100vh-16rem)] overflow-y-auto scrollbar-none"  >
        <div className="border-r border-gray-100 p-10 pb-0 " >
        {/*to have height: <div className="grid grid-cols-8 bg-secondary pr-10 max-h-[1000px] overflow-y-auto">
        <div className="border-r border-gray-100 p-10"> */}
          {hours.map((hour) => (
            <div
              key={hour}
              className="h-20 p-2 text-sm text-gray-500 font-outfit"
            >
              {`${hour}:00`}
            </div>
          ))}
        </div>
        
        {weekDays.map((day) => {
          const isSelected = selectedDay && isSameDay(day, selectedDay);
          return (
            <div 
              key={day.toString()} 
              className={cn(
                "relative border-b border-gray-100 px-10",
                isSelected ? "bg-primary/10" : ""
              )}
            >
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="h-20 relative group"
                >
                  <Popover>
                    <PopoverTrigger asChild>
                      <button 
                        className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-primary w-6 h-6 rounded-full hover:bg-primary/10 flex items-center justify-center"
                        onClick={() => handleSlotClick(day, hour)}
                      >
                        +
                      </button>
                    </PopoverTrigger>
                    {selectedSlot && isSameDay(selectedSlot, day) && selectedSlot.getHours() === hour && (
                      <PopoverContent className="w-80 p-0" align="start">
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
              {getEventsForDay(day).map((event) => (
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
          );
        })}
      </div>
    </div>
  );
}