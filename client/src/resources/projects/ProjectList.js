import React from 'react';
import { List, SimpleList } from '../../archipelago-layout';

const ProjectList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      secondaryText={record => record['pair:comment']}
      leftAvatar={() => <img src={process.env.PUBLIC_URL + '/gv.png'} width="100%" alt="Les Grands Voisins" />}
      linkType="show"
    />
  </List>
);

export default ProjectList;
