// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', (req, reply) => {
  reply.send('Hello World!!!');
});

fastify.get('/test', (req, reply) => {
  reply.send('Hello world');
});


fastify.register(require('./routes/blog')); 
fastify.register(require('./routes/admins'));

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

