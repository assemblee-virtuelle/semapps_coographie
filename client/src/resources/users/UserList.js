import React from 'react';
import { List, SimpleList } from '../../archipelago-layout';

const UserList = props => (
  <List sort={{ field: 'pair:lastName', order: 'DESC' }} {...props}>
    <SimpleList
      primaryText={record => `${record['foaf:givenName']} ${record['foaf:familyName']}`}
      leftAvatar={() => (<img src={process.env.PUBLIC_URL + '/unknown-user.png'} width="100%" alt="Les Grands Voisins" />)}
      linkType="show"
    />
  </List>
);

export default UserList;
