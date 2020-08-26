import React from 'react';
import { List, SimpleList } from '../../archipelago-layout';

const InterestList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      leftAvatar={() => <img src={process.env.PUBLIC_URL + '/av.png'} width="100%" alt="Assemblée virtuelle" />}
    />
  </List>
);

export default InterestList;
