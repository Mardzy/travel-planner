import type { NamedEntity, PersonNames, TravelLeg, TripParticipantStatus } from '../models';

export type TripParticipantDto = PersonNames & {
  id: string;
  tripId: string;
  email?: string;
  departure: TravelLeg;
  return?: TravelLeg;
  status: TripParticipantStatus;
  notes?: string;
};
