// endpoints/trip-participants/getByTripAndTravelerId.ts

import type { FastifyPluginAsync } from 'fastify';
import type { TripParticipantDto } from '@travel-planner/shared';

import { createTripParticipantDto } from '../../dto';
import { travelers, tripParticipants } from '../../mock-data';
import { TravelerIdParams, TripIdParams } from '../types';

type Params = TripIdParams & TravelerIdParams;

export const getParticipantByTripAndTravelerId: FastifyPluginAsync = async (fastify) => {
  fastify.get<{ Params: Params }>(
    '/trips/:tripId/participants/:travelerId',
    async (request, reply): Promise<TripParticipantDto | void> => {
      try {
        const { tripId, travelerId } = request.params;

        const tripParticipant = tripParticipants.find(
          (participant) => participant.tripId === tripId && participant.id === travelerId
        );

        if (!tripParticipant) {
          return reply.code(404).send({
            message: 'Trip participant not found'
          });
        }

        const traveler = travelers.find(({ id }) => id === travelerId);

        if (!traveler) {
          return reply.code(404).send({
            message: 'Traveler not found'
          });
        }

        return createTripParticipantDto({
          tripParticipant,
          traveler
        });
      } catch (error) {
        request.log.error(error);

        return reply.code(500).send({
          message: 'Failed to retrieve trip participant'
        });
      }
    }
  );
};
