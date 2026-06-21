import type { TripParticipant } from '@travel-planner/shared';

export const tripParticipants: TripParticipant[] = [
  {
    tripId: 'trip-1',
    id: 'traveler-2',
    departure: {
      location: 'Prague',
      airport: 'PRG',
      date: '2026-08-14'
    },
    return: {
      location: 'Prague',
      airport: 'PRG',
      date: '2026-08-17'
    },
    status: 'ready'
  },
  {
    tripId: 'trip-1',
    id: 'traveler-3',
    departure: {
      location: 'Amsterdam',
      airport: 'AMS',
      date: '2026-08-14'
    },
    return: {
      location: 'Amsterdam',
      airport: 'AMS',
      date: '2026-08-17'
    },
    status: 'ready'
  }
];
