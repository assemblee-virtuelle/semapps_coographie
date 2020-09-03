import React from 'react';
import { List, SimpleList } from '../../archipelago-layout';

const OrganizationList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['foaf:name']}
      secondaryText={record => record['gv:proposedContribution']}
      leftAvatar={record => <img src={record['foaf:img'] || process.env.PUBLIC_URL + '/gv.png'} width="100%" alt="" />}
      linkType="show"
    />
  </List>
);

export default OrganizationList;
