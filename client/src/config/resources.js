const resources = {
  Project: {
    types: ['pair:Project'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'projects'
  },
  Organization: {
    types: ['pair:Organization'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'organizations'
  },
  Person: {
    types: ['pair:Person'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'persons'
  },
  Thema: {
    types: ['pair:Thema'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'themas'
  },
  Skill: {
    types: ['pair:Skill'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'skills'
  },
  Agent: {
    types: ['pair:Person', 'pair:Organization']
  }
};

export default resources;
