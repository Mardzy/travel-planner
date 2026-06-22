import Fastify from 'fastify';
import cors from '@fastify/cors';

import { endpoints } from './endpoints';

const SERVER_HOST = process.env.SERVER_HOST ?? '0.0.0.0';
const SERVER_PORT = Number(process.env.SERVER_PORT ?? 3000);
const WEB_ORIGIN = process.env.WEB_ORIGIN ?? 'http://localhost:5173';

const startServer = async () => {
  try {
    const server = Fastify({
      logger: true
    });

    await server.register(cors, {
      origin: WEB_ORIGIN
    });

    endpoints.forEach((endpoint) => {
      server.register(endpoint);
    });

    await server.listen({
      host: SERVER_HOST,
      port: SERVER_PORT
    });

    server.log.info('Server started on port 3000');
  } catch (error) {
    console.error('Failed to start server');
    console.error(error);

    process.exit(1);
  }
};

void startServer();
