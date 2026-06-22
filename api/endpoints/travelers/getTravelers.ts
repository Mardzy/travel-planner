import type { FastifyPluginAsync } from 'fastify';

import { travelers } from '../../mock-data';
import { ROUTES } from '../routes';

export const getTravelers: FastifyPluginAsync = async (fastify) => {
  fastify.get(ROUTES.travelers.root, async (_, reply) => {
    try {
      return travelers;
    } catch (error) {
      fastify.log.error(error);

      return reply.code(500).send({
        message: 'Failed to retrieve travelers'
      });
    }
  });
};
