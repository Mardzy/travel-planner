import type { Traveler } from '@travel-planner/shared';

export const travelers: Traveler[] = [
  {
    id: 'traveler-1',
    firstName: 'Paul',
    lastName: 'Mardling',
    email: 'paul@example.com',

    created: {
      byUserId: 'user-1',
      at: '2026-06-17T12:00:00Z'
    }
  },
  {
    id: 'traveler-2',
    firstName: 'Veronika',
    lastName: 'Mardling',
    email: 'veru@example.com',

    created: {
      byUserId: 'user-1',
      at: '2026-06-17T12:05:00Z'
    }
  },
  {
    id: 'traveler-3',
    firstName: 'Yulia',
    lastName: 'Ivanova',
    email: 'yulia@example.com',

    created: {
      byUserId: 'user-2',
      at: '2026-06-17T12:10:00Z'
    }
  }
];
