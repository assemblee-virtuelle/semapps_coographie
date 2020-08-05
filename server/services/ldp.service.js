const { LdpService } = require('@semapps/ldp');
const ontologies = require('../ontologies');

module.exports = {
  mixins: [LdpService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    ontologies,
    containers: ['/projects','/organizations','/persons','/themas','/skills'],
    defaultJsonContext: 'https://gist.githubusercontent.com/srosset81/cc330b63a213e6f68eb5e52d6ded4342/raw/7418e256c64685d44607f333e49489afb302a0b6/pair-ontology.json'
  }
};
