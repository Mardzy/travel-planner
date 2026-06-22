import type { FastifyPluginAsync } from 'fastify';

import { ROUTES } from '../routes';
import { travelers } from '../../mock-data/travelers';
import { TravelerIdParams } from '../types';

export const getTravelerById: FastifyPluginAsync = async (fastify) => {
  fastify.get<{ Params: TravelerIdParams }>(ROUTES.travelers.byId, async (request, reply) => {
    const { travelerId } = request.params as { travelerId: string };

    const traveler = travelers.find(({ id }) => id === travelerId);

    if (!traveler) {
      return reply.code(404).send({ message: 'Traveler not found' });
    }

    return traveler;
  });
};
