import type { FastifyPluginAsync } from 'fastify';

import { trips } from '../../mock-data/trips';
import { TripIdParams } from '../types';
import { ROUTES } from '../routes';

export const getTripById: FastifyPluginAsync = async (fastify) => {
  fastify.get<{ Params: TripIdParams }>(ROUTES.trips.byId, async ({ params }, { code }) => {
    const { tripId } = params;

    const trip = trips.find(({ id }) => id === tripId);

    if (!trip) {
      return code(404).send({ message: 'Trip not found' });
    }

    return trip;
  });
};
