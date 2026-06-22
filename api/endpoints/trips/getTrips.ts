import type { FastifyPluginAsync } from 'fastify';

import { trips } from '../../mock-data';
import { ROUTES } from '../routes';

export const getTrips: FastifyPluginAsync = async (fastify) => {
  fastify.get(ROUTES.trips.root, async (request, reply) => {
    try {
      return trips;
    } catch (error) {
      request.log.error(error);

      return reply.code(500).send({
        message: 'Failed to retrieve trips'
      });
    }
  });
};
