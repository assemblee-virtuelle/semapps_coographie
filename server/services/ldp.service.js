const { LdpService } = require('@semapps/ldp');
const ontologies = require('../ontologies');

module.exports = {
  mixins: [LdpService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    ontologies,
    containers: ['/organizations', '/projects', '/events', '/persons', '/themas', '/skills'],
    defaultJsonContext:
      'https://gist.githubusercontent.com/srosset81/cc330b63a213e6f68eb5e52d6ded4342/raw/36325e26adf8aeef948d6a3e701dff9c4c4c066b/pair-ontology.json'
  }
};
