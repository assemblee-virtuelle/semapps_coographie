import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  useAuthenticated,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  AutocompleteArrayInput
} from 'react-admin';
import Icon from '@material-ui/icons/Person';
import { JsonLdReferenceInput } from '@semapps/react-admin';
import SearchFilter from '../components/SearchFilter';

export const PersonIcon = Icon;

const PersonTitle = ({ record }) => {
  return <span>Personnne {record ? `${record['pair:firstName']} ${record['pair:lastName']}` : ''}</span>;
};

export const PersonList = props => {
  useAuthenticated();
  return (
    <List title="Contributeurs" perPage={25} filters={<SearchFilter />} {...props}>
      <Datagrid>
        <TextField source="pair:firstName" label="Prénom" />
        <TextField source="pair:lastName" label="Nom de famille" />
        <EditButton basePath="/Person" />
      </Datagrid>
    </List>
  );
};

export const PersonEdit = props => {
  useAuthenticated();
  return (
    <Edit title={<PersonTitle />} {...props}>
      <SimpleForm>
        <TextInput source="pair:firstName" label="Prénom" />
        <TextInput source="pair:lastName" label="Nom de famille" />
        <JsonLdReferenceInput label="Intérêts" reference="Thema" source="pair:hasInterest">
          <AutocompleteArrayInput
            optionText={record => (record && record['pair:label']) || 'LABEL MANQUANT'}
            fullWidth
          />
        </JsonLdReferenceInput>
        <JsonLdReferenceInput label="membre de" reference="Organization" source="pair:memberOf">
          <AutocompleteArrayInput
            optionText={record => (record && record['pair:label']) || 'LABEL MANQUANT'}
            fullWidth
          />
        </JsonLdReferenceInput>
        <JsonLdReferenceInput label="impliqué dans" reference="Project" source="pair:involvedIn">
          <AutocompleteArrayInput
            optionText={record => (record && record['pair:label']) || 'LABEL MANQUANT'}
            fullWidth
          />
        </JsonLdReferenceInput>
        <JsonLdReferenceInput label="offre" reference="Skill" source="pair:offers">
          <AutocompleteArrayInput
            optionText={record => (record && record['pair:label']) || 'LABEL MANQUANT'}
            fullWidth
          />
        </JsonLdReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
