import { CalendarEvent, CalendarView } from "@/lib/types";
import { DayView } from "./views/DayView";
import { WeekView } from "./views/WeekView";
import { MonthView } from "./views/MonthView";

interface CalendarGridProps {
  currentDate: Date;
  events: CalendarEvent[];
  view: CalendarView;
}

export function CalendarGrid({ currentDate, events, view }: CalendarGridProps) {
  return (
    <div className="flex-1 overflow-auto">
      {view === 'day' && <DayView currentDate={currentDate} events={events} />}
      {view === 'week' && <WeekView currentDate={currentDate} events={events} />}
      {view === 'month' && <MonthView currentDate={currentDate} events={events} />}
    </div>
  );
}