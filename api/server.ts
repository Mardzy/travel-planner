import Fastify from 'fastify';

import { endpoints } from './endpoints';

const startServer = async () => {
  try {
    const server = Fastify({
      logger: true
    });

    endpoints.forEach((endpoint) => {
      server.register(endpoint);
    });

    await server.listen({
      host: '0.0.0.0',
      port: 3000
    });

    server.log.info('Server started on port 3000');
  } catch (error) {
    console.error('Failed to start server');
    console.error(error);

    process.exit(1);
  }
};

void startServer();
