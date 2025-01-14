import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendarView } from "@/lib/types";
import { format } from "date-fns";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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

/**
 * CalendarHeader displays the current month/year and view buttons.
 * On mobile, it simplifies to show only the current day and navigation arrows.
 */
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
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6">
      {isMobile ? (
        // Mobile View: Show current day and navigation arrows
        <div className="flex items-center justify-between w-full">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onNavigatePrevious}
            className="hover:bg-gray-100 rounded-xl"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <h1 className="text-xl font-medium">
            {format(currentDate, "EEEE, MMM d, yyyy")}
          </h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onNavigateNext}
            className="hover:bg-gray-100 rounded-xl"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      ) : (
        // Desktop View: Show month/year and view buttons
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full">
          <h1 className="text-xl sm:text-2xl font-medium">
            {format(currentDate, "MMMM, yyyy")}
          </h1>
          <div className="flex rounded-xl bg-secondary p-1">
            <Button
              variant={view === "month" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("month")}
              className={`rounded-xl px-3 sm:px-4 ${
                view === "month" ? "bg-white shadow-sm" : "hover:bg-gray-100"
              }`}
            >
              Month
            </Button>
            <Button
              variant={view === "week" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("week")}
              className={`rounded-xl px-3 sm:px-4 ${
                view === "week" ? "bg-white shadow-sm" : "hover:bg-gray-100"
              }`}
            >
              Week
            </Button>
            <Button
              variant={view === "day" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange("day")}
              className={`rounded-xl px-3 sm:px-4 ${
                view === "day" ? "bg-white shadow-sm" : "hover:bg-gray-100"
              }`}
            >
              Day
            </Button>
          </div>
        </div>
      )}

      {!isMobile && (
        // Additional navigation buttons for desktop
        <div className="flex items-center gap-2 mt-4 lg:mt-0">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onNavigatePrevious}
            className="hover:bg-gray-100 rounded-xl bg-secondary"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
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
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}