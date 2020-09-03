import React from 'react';
import { AutocompleteArrayInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '../../archipelago-layout';
import UriArrayInput from '../../components/UriArrayInput';

export const OrganizationEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput label="Nom" source="foaf:name" fullWidth />
      <TextInput label="Objet" source="purl:subject" fullWidth />
      <TextInput label="Date d'arrivée" source="gv:arrivalDate" fullWidth />
      <TextInput label="Statut" source="gv:status" fullWidth />
      <TextInput label="Bâtiment" source="gv:building" fullWidth />
      <TextInput label="Salle" source="gv:room" fullWidth />
      <TextInput label="Type de convention" source="gv:conventionType" fullWidth />
      <TextInput label="Nombre d'employés" source="gv:empoyeesCount" fullWidth />
      <TextInput label="Propositions" source="gv:proposedContribution" fullWidth />
      <TextInput label="Réalisations" source="gv:realisedContribution" fullWidth />
      <TextInput label="Site web" source="foaf:homepage" fullWidth />
      <UriArrayInput label="Responsables" reference="User" source="pair:hasResponsible">
        <AutocompleteArrayInput
          optionText={record => record && `${record['foaf:givenName']} ${record['foaf:familyName']}`}
          fullWidth
        />
      </UriArrayInput>
    </SimpleForm>
  </Edit>
);

export default OrganizationEdit;
