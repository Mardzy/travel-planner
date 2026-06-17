import type { Trip } from './Trip';
import type { TripParticipant } from './TripParticipant';
import type { Traveler } from './Traveler';

export type TripDashboardParticipant = {
  traveler: Traveler;
  tripParticipant: TripParticipant;
};

export type TripDashboardTravelWindow = {
  earliestDepartureDate?: string;
  latestDepartureDate?: string;
  earliestReturnDate?: string;
  latestReturnDate?: string;
};

export type TripDashboardDurations = {
  shortestTripDays?: number;
  longestTripDays?: number;
  averageTripDays?: number;
};

export type TripDashboard = {
  trip: Trip;
  participants: TripDashboardParticipant[];

  summary: {
    participantCount: number;
    readyCount: number;
    draftCount: number;
    cancelledCount: number;
  };

  travelWindow: TripDashboardTravelWindow;
  durations: TripDashboardDurations;
};
