import type { FastifyPluginAsync } from 'fastify';
import type { TripDashboard } from '@travel-planner/shared';

import { trips, travelers, tripParticipants } from '../../mock-data';

const getSortedDates = (dates: string[]) => dates.toSorted();

const getTripDurationDays = (departureDate: string, returnDate: string) => {
  const departureTime = new Date(departureDate).getTime();
  const returnTime = new Date(returnDate).getTime();

  return (returnTime - departureTime) / (1000 * 60 * 60 * 24);
};

export const getDashboard: FastifyPluginAsync = async ({ get }) => {
  get('/trips/:tripId/dashboard', async (request, reply): Promise<TripDashboard | void> => {
    const { tripId } = request.params as {
      tripId: string;
    };

    const trip = trips.find(({ id }) => id === tripId);

    if (!trip) {
      reply.code(404).send({
        message: 'Trip not found'
      });

      return;
    }

    const participants = tripParticipants
      .filter((participant) => participant.tripId === tripId)
      .map((participant) => {
        const traveler = travelers.find(({ id }) => id === participant.travelerId);

        return {
          traveler,
          tripParticipant: participant
        };
      })
      .filter(
        (
          participant
        ): participant is {
          traveler: (typeof travelers)[number];
          tripParticipant: (typeof tripParticipants)[number];
        } => Boolean(participant.traveler)
      );

    const departureDates = participants.map(({ tripParticipant }) => tripParticipant.departure.date);

    const returnDates = participants
      .map(({ tripParticipant }) => tripParticipant.return?.date)
      .filter((date): date is string => Boolean(date));

    const sortedDepartureDates = getSortedDates(departureDates);
    const sortedReturnDates = getSortedDates(returnDates);

    const tripDurations = participants
      .map(({ tripParticipant }) => {
        if (!tripParticipant.return) {
          return undefined;
        }

        return getTripDurationDays(tripParticipant.departure.date, tripParticipant.return.date);
      })
      .filter((duration): duration is number => duration !== undefined);

    return {
      trip,
      participants,

      summary: {
        participantCount: participants.length,
        readyCount: participants.filter(({ tripParticipant }) => tripParticipant.status === 'ready').length,
        draftCount: participants.filter(({ tripParticipant }) => tripParticipant.status === 'draft').length,
        cancelledCount: participants.filter(({ tripParticipant }) => tripParticipant.status === 'cancelled').length
      },

      travelWindow: {
        earliestDepartureDate: sortedDepartureDates[0],
        latestDepartureDate: sortedDepartureDates.at(-1),
        earliestReturnDate: sortedReturnDates[0],
        latestReturnDate: sortedReturnDates.at(-1)
      },

      durations: {
        shortestTripDays: tripDurations.length ? Math.min(...tripDurations) : undefined,
        longestTripDays: tripDurations.length ? Math.max(...tripDurations) : undefined,
        averageTripDays: tripDurations.length
          ? tripDurations.reduce((total, duration) => total + duration, 0) / tripDurations.length
          : undefined
      }
    };
  });
};