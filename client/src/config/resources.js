const resources = {
  Project: {
    types: ['pair:Project'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources',
    slugField: 'pair:label'
  },
  Organization: {
    types: ['foaf:Organization'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources',
    slugField: 'foaf:name'
  },
  User: {
    types: ['foaf:Person'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources',
    slugField: ['foaf:givenName', 'foaf:familyName']
  },
  Skill: {
    types: ['pair:Skill'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources',
    slugField: 'pair:label'
  },
  Interest: {
    types: ['pair:Thema'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources',
    slugField: 'pair:label'
  }
};

export default resources;
