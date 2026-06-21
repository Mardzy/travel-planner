import type { Traveler, TripParticipant, TripParticipantDto } from '@travel-planner/shared';

type Params = {
  tripParticipant: TripParticipant;
  traveler: Traveler;
};

export const createTripParticipantDto = ({ tripParticipant, traveler }: Params): TripParticipantDto => ({
  id: traveler.id,

  firstName: traveler.firstName,
  lastName: traveler.lastName,
  email: traveler.email,

  tripId: tripParticipant.tripId,

  departure: tripParticipant.departure,
  return: tripParticipant.return,

  status: tripParticipant.status,
  notes: tripParticipant.notes
});
