import React from 'react';
import { AutocompleteArrayInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '../../archipelago-layout';
import UriArrayInput from '../../components/UriArrayInput';

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="pair:firstName" label="Prénom" fullWidth />
      <TextInput source="pair:lastName" label="Nom de famille" fullWidth />
      <UriArrayInput label="Participe à" reference="Project" source="pair:involvedIn">
        <AutocompleteArrayInput optionText={record => record && record['pair:label']} fullWidth />
      </UriArrayInput>
      <UriArrayInput label="Membre" reference="Organization" source="pair:memberOf">
        <AutocompleteArrayInput optionText={record => record && record['pair:label']} fullWidth />
      </UriArrayInput>
      <UriArrayInput label="Compétences" reference="Skill" source="pair:offers">
        <AutocompleteArrayInput optionText={record => record && record['pair:label']} fullWidth />
      </UriArrayInput>
      <UriArrayInput label="Intérêts" reference="Interest" source="pair:hasInterest">
        <AutocompleteArrayInput optionText={record => record && record['pair:label']} fullWidth />
      </UriArrayInput>
    </SimpleForm>
  </Edit>
);

export default UserEdit;
