// api/server.ts

import Fastify from 'fastify';

import { getAllTravelers } from './endpoints/travelers/getAll';
import { getTravelerById } from './endpoints/travelers/getById';

import { getTrips } from './endpoints/trips/get';
import { getTripById } from './endpoints/trips/getById';
import { getDashboard } from './endpoints/trips/getDashboard';

import { getTripParticipantsByTripId } from './endpoints/trip-participants/getByTripId';

import { getUserById } from './endpoints/users/getById';

const server = Fastify({
  logger: true
});

await server.register(getAllTravelers);
await server.register(getTravelerById);

await server.register(getTrips);
await server.register(getTripById);
await server.register(getDashboard);

await server.register(getTripParticipantsByTripId);

await server.register(getUserById);

try {
  await server.listen({
    port: 3000,
    host: '0.0.0.0'
  });
} catch (error) {
  server.log.error(error);
  process.exit(1);
}
