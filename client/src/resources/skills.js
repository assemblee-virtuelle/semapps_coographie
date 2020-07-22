import React from 'react';
import { List, Datagrid, useAuthenticated } from 'react-admin';
import Icon from '@material-ui/icons/Toys';
import { StringField } from '@semapps/react-admin';

export const SkillIcon = Icon;

export const SkillList = props => {
  useAuthenticated();
  return (
    <List title="Compétences" perPage={25} {...props}>
      <Datagrid>
        <StringField source="rdfs:label" label="Nom" />
      </Datagrid>
    </List>
  );
};
