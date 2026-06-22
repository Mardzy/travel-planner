export const ROUTES = {
  travelers: {
    byId: '/travelers/:travelerId',
    root: '/travelers'
  },
  trips: {
    dashboard: '/trips/:tripId/dashboard',
    byId: '/trips/:tripId',
    participants: '/trips/:tripId/participants',
    participantById: '/trips/:tripId/participants/:participantId',
    root: '/trips'
  },
  users: {
    byId: '/users/:userId',
    root: '/users'
  }
} as const;
