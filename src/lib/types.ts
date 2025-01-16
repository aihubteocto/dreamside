export type CalendarView = 'month' | 'week' | 'day';

export interface Attendee {
  name: string;
  avatar?: string;
}
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  category: string;
  location?: string;
  description?: string;
  attendees?: Attendee[];
}