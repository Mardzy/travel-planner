import type { FastifyPluginAsync } from 'fastify';
import type { TripParticipantDto } from '@travel-planner/shared';

import { travelers, tripParticipants } from '../../mock-data';
import { createTripParticipantDto } from '../../dto';
import { TripIdParams } from '../types';

export const getParticipantsByTripId: FastifyPluginAsync = async (fastify) => {
  fastify.get<{ Params: TripIdParams }>(
    '/trips/:tripId/participants',
    async (request, reply): Promise<TripParticipantDto[] | void> => {
      try {
        const { tripId } = request.params;

        return tripParticipants
          .filter((tripParticipant) => tripParticipant.tripId === tripId)
          .map((tripParticipant) => {
            const traveler = travelers.find(({ id }) => id === tripParticipant.id);

            if (!traveler) {
              return undefined;
            }

            return createTripParticipantDto({
              tripParticipant,
              traveler
            });
          })
          .filter((participant): participant is TripParticipantDto => Boolean(participant));
      } catch (error) {
        request.log.error(error);

        return reply.code(500).send({
          message: 'Failed to retrieve trip participants'
        });
      }
    }
  );
};
