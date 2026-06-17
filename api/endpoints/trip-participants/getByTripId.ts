import type { FastifyPluginAsync } from 'fastify';
import { tripParticipants } from '../../mock-data/tripParticipants';

export const getTripParticipantsByTripId: FastifyPluginAsync = async ({ get }) => {
  get('/trips/:tripId/participants', async ({ params }) => {
    const { tripId } = params as { tripId: string };

    return tripParticipants.filter((participant) => participant.tripId === tripId);
  });
};
