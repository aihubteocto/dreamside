export type CalendarView = 'month' | 'week' | 'day';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  category: 'work' | 'personal' | 'health';
  description?: string;
  location?: string;
  attendees?: string[];
}