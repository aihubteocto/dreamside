import { CalendarEvent } from "@/lib/types";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { AddEventDialog } from "@/components/AddEventDialog";
import { useState, useRef, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Plus } from "lucide-react";

interface WeekViewProps {
  currentDate: Date;
  events: CalendarEvent[];
}

const hours = Array.from({ length: 24 }, (_, i) => i);

const eventColors: Record<CalendarEvent['category'], string> = {
  work: 'bg-blue-100 border-blue-200',
  personal: 'bg-yellow-100 border-yellow-200',
  health: 'bg-pink-100 border-pink-200',
};


export function WeekView({ currentDate, events }: WeekViewProps) {
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const weekStart = startOfWeek(currentDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const getEventsForDay = (date: Date) => {
    return events.filter(event => isSameDay(event.start, date));
  };

  const getEventStyle = (event: CalendarEvent) => {
    const startHour = event.start.getHours();
    const startMinutes = event.start.getMinutes();
    const endHour = event.end.getHours();
    const endMinutes = event.end.getMinutes();
    
    const top = (startHour + startMinutes / 60) * 80;
    const height = ((endHour - startHour) + (endMinutes - startMinutes) / 60) * 80;
    
    return {
      top: `${top}px`,
      height: `${height}px`,
    };
  };

  const handleSlotClick = (date: Date, hour: number) => {
    const newDate = new Date(date);
    newDate.setHours(hour, 0, 0, 0);
    setSelectedSlot(newDate);
    setDialogOpen(true);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const currentHour = new Date().getHours();
      scrollContainerRef.current.scrollTo({
        top: currentHour * 80 - 160,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="flex-1 overflow-hidden bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex items-center px-6 py-4 ">
        <div className="w-20 flex justify-center">
          <CalendarIcon className="w-5 h-5 text-gray-500" />
        </div>
        <div className="grid grid-cols-7 flex-1 gap-4">
          {weekDays.map((day) => {
            const isToday = isSameDay(day, new Date());
            const isSelected = selectedDay && isSameDay(day, selectedDay);
            return (
              <button
                key={day.toString()}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "flex flex-col items-center py-2 rounded-lg transition-colors",
                  isSelected && "bg-primary/5",
                  isToday && "bg-primary/5"
                )}
              >
                <span className="text-sm font-medium">{format(day, 'EEE')}</span>
                <span className={cn(
                  "text-2xl font-semibold mt-1",
                  isToday && "text-primary"
                )}>
                  {format(day, 'd')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Calendar Grid */}
      <div 
        ref={scrollContainerRef}
        className="calendar-grid h-[calc(100vh-16rem)] overflow-y-auto"
      >
        {/* Time Column */}
        <div className="time-column">
          {hours.map((hour) => (
            <div
              key={hour}
              className="h-20 flex items-center justify-end pr-4 text-sm text-gray-500"
            >
              {hour.toString().padStart(2, "0")}:00
              </div>
          ))}
        </div>

        {/* Day Columns */}
        {weekDays.map((day) => (
          <div 
            key={day.toString()} 
            className={cn(
              "relative",
              selectedDay && isSameDay(day, selectedDay) && "bg-primary/5"
            )}
          >
            {/* Hour cells */}
            {hours.map((hour) => (
              <div
                key={hour}
                className="h-20 border-t border-gray-100 relative group "
                onClick={() => handleSlotClick(day, hour)}
              >
                <button className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            ))}

            {/* Events */}
            {getEventsForDay(day).map((event) => (
              <div
                key={event.id}
                style={getEventStyle(event)}
                className={cn(
                  "event-card",
                  eventColors[event.category] || 'blue'
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-sm">{event.title}</h3>
                  {event.category && (
                    <span className="event-tag">
                      {event.category}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  {format(event.start, 'HH:mm')} - {format(event.end, 'HH:mm')}
                </div>
                {event.location && (
                  <div className="text-xs text-gray-600 mb-2">
                    📍 {event.location}
                  </div>
                )}
                {event.attendees && (
                  <div className="avatar-group">
                    {event.attendees.map((attendee, i) => (
                      <img
                        key={i}
                        src={attendee.avatar || '/placeholder.svg'}
                        alt={attendee.name}
                        title={attendee.name}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Add Event Dialog */}
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