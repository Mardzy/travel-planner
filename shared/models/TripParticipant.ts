import type { Auditable } from './Common';

export type TripParticipantStatus = 'draft' | 'ready' | 'cancelled';

export type TravelLeg = {
  location: string;
  date: string;
  airport?: string;
};

export type TripParticipant = Auditable & {
  tripId: string;
  travelerId: string;

  departure: TravelLeg;
  return?: TravelLeg;

  status: TripParticipantStatus;
  notes?: string;
};
