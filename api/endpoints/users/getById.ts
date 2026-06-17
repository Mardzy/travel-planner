import type { FastifyPluginAsync } from 'fastify';

import { users } from '../../mock-data/users';

export const getUserById: FastifyPluginAsync = async ({ get }) => {
  get('/users/:userId', async (request, reply) => {
    const { userId } = request.params as { userId: string };

    const user = users.find(({ id }) => id === userId);

    if (!user) {
      return reply.code(404).send({ message: 'User not found' });
    }

    return user;
  });
};
