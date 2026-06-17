import type { FastifyPluginAsync } from 'fastify';

import { trips } from '../../mock-data/trips';

export const getTrips: FastifyPluginAsync = async ({ get }) => {
  get('/trips', async () => trips);
};
