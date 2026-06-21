import type { FastifyPluginAsync } from 'fastify';

import { trips } from '../../mock-data/trips';
import { TripIdParams } from '../types';

export const getTripById: FastifyPluginAsync = async (fastify) => {
  fastify.get<{ Params: TripIdParams }>('/trips/:tripId', async ({ params }, { code }) => {
    const { tripId } = params;

    const trip = trips.find(({ id }) => id === tripId);

    if (!trip) {
      return code(404).send({ message: 'Trip not found' });
    }

    return trip;
  });
};
