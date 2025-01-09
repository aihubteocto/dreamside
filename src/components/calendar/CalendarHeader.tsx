import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendarView } from "@/lib/types";
import { format } from "date-fns";

interface CalendarHeaderProps {
  currentDate: Date;
  view: CalendarView;
  onViewChange: (view: CalendarView) => void;
  onDateChange: (date: Date) => void;
  onAddEvent: (event: any) => void;
  onNavigateToday: () => void;
  onNavigateNext: () => void;
  onNavigatePrevious: () => void;
}

export function CalendarHeader({
  currentDate,
  view,
  onViewChange,
  onDateChange,
  onAddEvent,
  onNavigateToday,
  onNavigateNext,
  onNavigatePrevious
}: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 ">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-medium">
          {format(currentDate, "MMMM, yyyy")}
        </h1>
        <div className="flex rounded-xl  bg-secondary p-1">
          <Button
            variant={view === "month" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewChange("month")}
            className={`rounded-xl px-4 ${
              view === "month" ? "bg-white shadow-sm" : "hover:bg-gray-100"
            }`}
          >
            Month
          </Button>
          <Button
            variant={view === "week" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewChange("week")}
            className={`rounded-xl px-4 ${
              view === "week" ? "bg-white shadow-sm" : "hover:bg-gray-100"
            }`}
          >
            Week
          </Button>
          <Button
            variant={view === "day" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewChange("day")}
            className={`rounded-xl px-4 ${
              view === "day" ? "bg-white shadow-sm" : "hover:bg-gray-100"
            }`}
          >
            Day
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onNavigatePrevious}
          className="hover:bg-gray-100 rounded-xl bg-secondary"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          onClick={onNavigateToday}
          className="hover:bg-gray-100 rounded-xl bg-secondary"
        >
          Today
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onNavigateNext}
          className="hover:bg-gray-100 rounded-xl bg-secondary"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}