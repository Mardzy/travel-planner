import type { FastifyPluginAsync } from 'fastify';

import { travelers } from '../../mock-data/travelers';

export const getAllTravelers: FastifyPluginAsync = async ({ get }) => {
  get('/travelers', async () => travelers);
};
