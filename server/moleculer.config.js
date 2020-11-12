module.exports = {
  // You can set all ServiceBroker configurations here
  // See https://moleculer.services/docs/0.14/configuration.html
  cacher: {
    type: 'Redis',
    options: {
      prefix: 'action',
      ttl: 86400, // Time-to-live of one hour
      redis: {
        host: 'localhost',
        port: 6379,
        db: 0
      }
    }
  }
};
