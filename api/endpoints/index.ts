export * from './routes';
import { getTravelers, getTravelerById } from './travelers';
import { getParticipantByTripAndTravelerId, getParticipantsByTripId } from './trip-participants';
import { getTrips, getTripById, getTripDashboard } from './trips';
export * from './types';
import { getUsers, getUserById } from './users';

export const endpoints = [
  getParticipantsByTripId,
  getParticipantByTripAndTravelerId,
  getTravelers,
  getTravelerById,
  getTrips,
  getTripById,
  getTripDashboard,
  getUserById,
  getUsers
];
