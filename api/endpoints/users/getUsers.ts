import type { FastifyPluginAsync } from 'fastify';

import { users } from '../../mock-data';

export const getUsers: FastifyPluginAsync = async (fastify) => {
  fastify.get('/users', async (request, reply) => {
    try {
      return users;
    } catch (error) {
      request.log.error(error);

      return reply.code(500).send({
        message: 'Failed to retrieve users'
      });
    }
  });
};
