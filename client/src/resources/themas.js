import React from 'react';
import { List, Datagrid, Edit, SimpleForm, EditButton, TextInput, AutocompleteArrayInput } from 'react-admin';
import Icon from '@material-ui/icons/EmojiObjects';
import { StringField } from '@semapps/react-admin';
import { JsonLdReferenceInput } from '@semapps/react-admin';

export const ThemaIcon = Icon;

const ThemaTitle = ({ record }) => {
  return <span>Sujet d'intéret {record ? `${record['pair:label']}` : ''}</span>;
};

export const ThemaList = props => {
  return (
    <List title="themes" perPage={25} {...props}>
      <Datagrid>
        <StringField source="pair:label" label="Nom" />
        <EditButton basePath="/Thema" />
      </Datagrid>
    </List>
  );
};

export const ThemaEdit = props => {
  return (
    <Edit title={<ThemaTitle />} {...props}>
      <SimpleForm>
        <TextInput source="pair:label" label="Nom" />
        <JsonLdReferenceInput label="interet de" reference="Person" source="pair:interestOf">
          <AutocompleteArrayInput
            optionText={record => {
              console.log(record);
              return (record && `${record['pair:firstName']} ${record['pair:lastName']}`) || 'LABEL MANQUANT';
            }}
            fullWidth
          />
        </JsonLdReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
