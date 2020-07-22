import React from 'react';
import { List, Datagrid, useAuthenticated } from 'react-admin';
import Icon from '@material-ui/icons/Toys';
import { StringField } from '@semapps/react-admin';

export const ThemaIcon = Icon;

export const ThemaList = props => {
  useAuthenticated();
  return (
    <List title="Concepts" perPage={25} {...props}>
      <Datagrid>
        <StringField source="rdfs:label" label="Nom" />
      </Datagrid>
    </List>
  );
};
