export const paths = {
  trips: '/trips',
  tripById: (tripId: string) => `/trips/${tripId}`,
  tripDashboard: (tripId: string) => `/trips/${tripId}/dashboard`,
  tripParticipants: (tripId: string) => `/trips/${tripId}/participants`,
  tripParticipantById: (participantId: string, tripId: string) => `/trips/${tripId}/participants/${participantId}`,
  travelerById: (travelerId: string) => `/travelers/${travelerId}`,
  travelers: '/travelers',
  userById: (userId: string) => `/users/${userId}`,
  users: '/users'
} as const;
