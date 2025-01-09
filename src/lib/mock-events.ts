import { CalendarEvent } from './types';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Meeting',
    start: new Date(today.setHours(10, 0)),
    end: new Date(today.setHours(11, 30)),
    category: 'work',
    description: 'Weekly team sync',
    location: 'Conference Room A'
  },
  {
    id: '2',
    title: 'Lunch with Client',
    start: new Date(today.setHours(12, 30)),
    end: new Date(today.setHours(14, 0)),
    category: 'work',
    location: 'Downtown Cafe'
  },
  {
    id: '3',
    title: 'Gym Session',
    start: new Date(today.setHours(17, 0)),
    end: new Date(today.setHours(18, 30)),
    category: 'health',
    location: 'Fitness Center'
  },
  {
    id: '4',
    title: 'Project Review',
    start: new Date(tomorrow.setHours(9, 0)),
    end: new Date(tomorrow.setHours(10, 30)),
    category: 'work',
    description: 'Q1 Project Review',
    location: 'Meeting Room 2'
  },
  {
    id: '5',
    title: 'Family Dinner',
    start: new Date(tomorrow.setHours(19, 0)),
    end: new Date(tomorrow.setHours(21, 0)),
    category: 'personal',
    location: 'Home'
  }
];