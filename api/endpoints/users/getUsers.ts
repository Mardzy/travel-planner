import type { FastifyPluginAsync } from 'fastify';

import { users } from '../../mock-data';
import { ROUTES } from '../routes';

export const getUsers: FastifyPluginAsync = async (fastify) => {
  fastify.get(ROUTES.users.root, async (request, reply) => {
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
