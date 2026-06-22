import type { FastifyPluginAsync } from 'fastify';

import { users } from '../../mock-data';
import { UserIdParams } from '../types';
import { ROUTES } from '../routes';

export const getUserById: FastifyPluginAsync = async (fastify) => {
  fastify.get<{ Params: UserIdParams }>(ROUTES.users.byId, async (request, reply) => {
    const { userId } = request.params;

    const user = users.find(({ id }) => id === userId);

    if (!user) {
      return reply.code(404).send({ message: 'User not found' });
    }

    return user;
  });
};
