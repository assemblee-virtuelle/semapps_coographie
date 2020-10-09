import React from 'react';
import { List, SimpleList } from '../../archipelago-layout';

const NoteList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['summary']}
      secondaryText={record => record['content']}
      leftAvatar={() => <img src={process.env.PUBLIC_URL + '/av.png'} width="100%" alt="Assemblée virtuelle" />}
      linkType="show"
    />
  </List>
);

export default NoteList;
