import React from 'react';
import { AutocompleteArrayInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '../../archipelago-layout';
import UriArrayInput from '../../components/UriArrayInput';

export const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput label="Prénom" source="foaf:givenName" fullWidth />
      <TextInput label="Nom de famille" source="foaf:familyName" fullWidth />
      <TextInput label="Adresse e-mail" source="foaf:mbox" fullWidth />
      <TextInput label="Téléphone" source="foaf:phone" fullWidth />
      <UriArrayInput label="Responsable" reference="Organization" source="pair:responsibleOf">
        <AutocompleteArrayInput optionText={record => record && record['foaf:name']} fullWidth />
      </UriArrayInput>
    </SimpleForm>
  </Edit>
);

export default UserEdit;
