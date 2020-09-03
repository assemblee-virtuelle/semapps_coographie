const { LdpService } = require('@semapps/ldp');
const ontologies = require('../ontologies');

module.exports = {
  mixins: [LdpService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    ontologies,
    containers: ['/resources'],
    defaultJsonContext: 'https://gist.githubusercontent.com/srosset81/140a1cfaa0f330b7c797c2ea319458bd/raw/ac00d92c9191468d561287985ea09a0bba22eb14/gv-ontology.json'
  }
};
