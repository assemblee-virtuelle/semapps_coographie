const { LdpService } = require('@semapps/ldp');
const ontologies = require('../ontologies');

module.exports = {
  mixins: [LdpService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    ontologies,
    containers: ['/resources'],
    defaultJsonContext: 'https://gist.githubusercontent.com/srosset81/cc330b63a213e6f68eb5e52d6ded4342/raw/1ca1cbf87027072503216df68892864757cb0db7/pair-ontology.json'
  }
};
