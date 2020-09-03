const { LdpService } = require('@semapps/ldp');
const ontologies = require('../ontologies');

module.exports = {
  mixins: [LdpService],
  settings: {
    baseUrl: process.env.SEMAPPS_HOME_URL,
    ontologies,
    containers: ['/resources'],
    defaultJsonContext: 'https://gist.githubusercontent.com/srosset81/140a1cfaa0f330b7c797c2ea319458bd/raw/53a36fa4e27e9405568f12e68c12e2358125ab54/gv-ontology.json'
  }
};
