import React from 'react';
import { AutocompleteArrayInput, SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { Edit } from '../../archipelago-layout';
import UriArrayInput from '../../components/UriArrayInput';

export const OrganizationEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="pair:label" label="Nom" />
      <TextInput source="pair:comment" label="Courte description" fullWidth />
      <MarkdownInput multiline source="pair:description" label="Description" fullWidth />
      <TextInput source="pair:homePage" label="Site web" fullWidth />
      <UriArrayInput label="Membres" reference="User" source="pair:hasMember">
        <AutocompleteArrayInput
          optionText={record => record && `${record['pair:firstName']} ${record['pair:lastName']}`}
          fullWidth
        />
      </UriArrayInput>
    </SimpleForm>
  </Edit>
);

export default OrganizationEdit;
