import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarEvent } from "@/lib/types";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";
import { CalendarIcon, MapPinIcon, TagIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddEventDialogProps {
  onAddEvent?: (event: Omit<CalendarEvent, 'id'>) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultDate: Date;
}

interface CategoryButtonProps {
  value: 'work' | 'personal' | 'health';
  selected: boolean;
  onClick: (value: 'work' | 'personal' | 'health') => void;
  children: React.ReactNode;
}

export function AddEventDialog({ onAddEvent, open, onOpenChange, defaultDate }: AddEventDialogProps) {
  const [selectedCategory, setSelectedCategory] = useState<'work' | 'personal' | 'health'>('work');
  const [startTime, setStartTime] = useState(defaultDate ? format(defaultDate, "HH:mm") : "09:00");
  const [endTime, setEndTime] = useState(defaultDate ? format(new Date(defaultDate.getTime() + 3600000), "HH:mm") : "10:00");

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        options.push(time);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const CategoryButton = ({ value, selected, onClick, children }: CategoryButtonProps) => (
    <button
      type="button"
      onClick={() => onClick(value)}
      className={cn(
        "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
        selected ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      )}
    >
      {children}
    </button>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const baseDate = defaultDate || new Date();
    
    const [hour = 0, minute = 0] = (startTime.split(':').map(Number) as [number, number]);
    const startDate = new Date(baseDate);
    startDate.setHours(hour, minute, 0);
    
    const [endHour = 0, endMinute = 0] = (endTime.split(':').map(Number) as [number, number]);
    const endDate = new Date(baseDate);
    endDate.setHours(endHour, endMinute, 0);

    if (endDate <= startDate) {
      toast({
        title: "Invalid time range",
        description: "End time must be after start time",
        variant: "destructive",
      });
      return;
    }

    const newEvent: Omit<CalendarEvent, 'id'> = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      location: formData.get('location') as string,
      category: selectedCategory,
      start: startDate,
      end: endDate,
    };
    
    onAddEvent?.(newEvent);
    onOpenChange?.(false);
    toast({
      title: "Event added",
      description: "Your event has been successfully added to the calendar",
    });
  };

  const formattedDate = defaultDate ? format(defaultDate, "EEEE, d MMMM") : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="p-4 space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                name="title" 
                required 
                placeholder="Add title"
                className="text-xl font-semibold bg-secondary border-none p-4 focus-visible:ring-0 placeholder:text-gray-400"
              />
            </div>

            <div>
              <Label>Time</Label>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                <span className="text-md text-secondary-dark font-semibold">{formattedDate}</span>
              </div>
              
              <div className="ml-7 mt-2">
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button type="button" className="text-sm py-1 hover:bg-gray-50 rounded">
                        {startTime}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0 bg-secondary">
                      <div className="max-h-[200px] overflow-y-auto">
                        {timeOptions.map((time) => (
                          <button
                            key={time}
                            type="button"
                            className={cn(
                              "w-full px-4 py-2 text-left text-sm hover:bg-gray-100",
                              time === startTime && "bg-gray-100"
                            )}
                            onClick={() => {
                              const [hour = 0, minute = 0] = (time.split(':').map(Number) as [number, number]);
                              const startDate = new Date();
                              startDate.setHours(hour, minute, 0);
                              setStartTime(time);

                              const [endHour = 0, endMinute = 0] = (endTime.split(':').map(Number) as [number, number]);
                              const endDate = new Date();
                              endDate.setHours(endHour, endMinute, 0);
                              if (endDate <= startDate) {
                                const newEndDate = new Date(startDate.getTime() + 3600000);
                                setEndTime(format(newEndDate, "HH:mm"));
                              }
                            }}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <span className="text-gray-400">-</span>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button type="button" className="text-sm py-1 hover:bg-gray-50 rounded">
                        {endTime}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0 bg-secondary">
                      <div className="max-h-[200px] overflow-y-auto">
                        {timeOptions.map((time) => (
                          <button
                            key={time}
                            type="button"
                            className={cn(
                              "w-full px-4 py-2 text-left text-sm hover:bg-gray-100",
                              time === endTime && "bg-gray-100"
                            )}
                            onClick={() => {
                              const [hour = 0, minute = 0] = (time.split(':').map(Number) as [number, number]);
                              const [startHour = 0, startMinute = 0] = (startTime.split(':').map(Number) as [number, number]);
                              const startDate = new Date();
                              startDate.setHours(startHour, startMinute, 0);
                              const selectedEndDate = new Date();
                              selectedEndDate.setHours(hour, minute, 0);
                              if (selectedEndDate > startDate) {
                                setEndTime(time);
                              }
                            }}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
              <Input 
                id="location" 
                name="location" 
                placeholder="Add location"
                className="border-none p-0 focus-visible:ring-0"
              />
            </div>

            <div className="flex items-center gap-2">
              <TagIcon className="w-5 h-5 text-gray-500" />
              <div className="flex gap-2">
                <CategoryButton
                  value="work"
                  selected={selectedCategory === 'work'}
                  onClick={setSelectedCategory}
                >
                  Work
                </CategoryButton>
                <CategoryButton
                  value="personal"
                  selected={selectedCategory === 'personal'}
                  onClick={setSelectedCategory}
                >
                  Personal
                </CategoryButton>
              
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="Add description"
                className="resize-none h-24 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-between items-center p-4 border-t">
            <Button 
              type="button" 
              variant="ghost" 
              size="sm"
              className="text-gray-500"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              size="sm"
              className="bg-black text-white hover:bg-black/90 rounded-full px-6"
            >
              Add Event
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}