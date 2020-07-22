const resources = {
  Project: {
    types: ['pair:Project'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources'
  },
  Organization: {
    types: ['pair:Organization'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources'
  },
  Person: {
    types: ['pair:Person'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources'
  },
  Concept: {
    types: ['pair:Thema'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources'
  },
  Skill: {
    types: ['pair:Skill'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'resources'
  },
  Agent: {
    types: ['pair:Person', 'pair:Organization']
  }
};

export default resources;
