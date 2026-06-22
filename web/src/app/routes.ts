export const routes = {
  home: {
    label: 'Home',
    path: '/'
  },
  trip: {
    label: 'Trip',
    path: '/trips/:tripId'
  },
  trips: {
    label: 'Trips',
    path: '/trips'
  },
  users: {
    label: 'Users',
    path: '/users'
  }
} as const;
