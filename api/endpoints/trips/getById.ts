import type { FastifyPluginAsync } from 'fastify';
import { trips } from '../../mock-data/trips';

export const getTripById: FastifyPluginAsync = async (fastify) => {
  fastify.get('/trips/:tripId', async ({ params }, { code }) => {
    const { tripId } = params as { tripId: string };

    const trip = trips.find(({ id }) => id === tripId);

    if (!trip) {
      return code(404).send({ message: 'Trip not found' });
    }

    return trip;
  });
};
