import type { FastifyPluginAsync } from 'fastify';

import { travelers } from '../../mock-data/travelers';

export const getTravelerById: FastifyPluginAsync = async (fastify) => {
  fastify.get('/travelers/:travelerId', async (request, reply) => {
    const { travelerId } = request.params as { travelerId: string };

    const traveler = travelers.find(({ id }) => id === travelerId);

    if (!traveler) {
      return reply.code(404).send({ message: 'Traveler not found' });
    }

    return traveler;
  });
};
