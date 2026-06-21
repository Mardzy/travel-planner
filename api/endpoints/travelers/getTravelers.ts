import type { FastifyPluginAsync } from 'fastify';

import { travelers } from '../../mock-data';

export const getTravelers: FastifyPluginAsync = async (fastify) => {
  fastify.get('/travelers', async (_, reply) => {
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
