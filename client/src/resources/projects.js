import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  TextInput,
  AutocompleteArrayInput
} from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import SettingsIcon from '@material-ui/icons/Settings';
import { JsonLdReferenceInput, UriInput } from '@semapps/react-admin';
import SearchFilter from '../components/SearchFilter';

export const ProjectIcon = SettingsIcon;

export const ProjectList = props => {
  return (
    <List title="Projets" perPage={25} filters={<SearchFilter />} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="pair:label" label="Nom" />
        <EditButton basePath="/Project" />
      </Datagrid>
    </List>
  );
};

const ProjectTitle = ({ record }) => {
  return <span>Projet {record ? `"${record['pair:label']}"` : ''}</span>;
};

export const ProjectEdit = props => (
  <Edit title={<ProjectTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" label="Nom" fullWidth />
      <TextInput source="pair:comment" label="Commentaire" fullWidth />
      <MarkdownInput multiline source="pair:description" label="Description" fullWidth />
      <UriInput source="pair:homePage" label="Site web" fullWidth />
      <TextInput source="pair:adress" label="Adresse" fullWidth />
      <JsonLdReferenceInput label="Implique" reference="Agent" source="pair:involves">
        <AutocompleteArrayInput
          optionText={record => {
            // TODO improve the handling of the many possible cases
            if (!record) return 'Label manquant';
            if (record['rdf:type'] === 'pair:Organization' || record['@type'] === 'pair:Organization') {
              if (Array.isArray(record['pair:label'])) {
                return record['pair:label'][0];
              } else {
                return record['pair:label'] || 'Label manquant';
              }
            }else{
              return `${record['pair:firstName']} ${record['pair:lastName']}` || 'Label manquant';
            }

          }}
          fullWidth
        />
      </JsonLdReferenceInput>
      <JsonLdReferenceInput label="Intérêts" reference="Thema" source="pair:hasInterest">
        <AutocompleteArrayInput
          optionText={record =>{
            console.log(record);
            return(record && record['pair:label']) || 'LABEL MANQUANT'}
          }
          fullWidth
        />
      </JsonLdReferenceInput>
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = props => (
  <Create title="Créer un projet" {...props}>
    <SimpleForm>
      <TextInput source="pair:label" label="Nom" />
      <MarkdownInput multiline source="pair:description" label="Description" fullWidth />
      <UriInput source="pair:homePage" label="Site web" />
    </SimpleForm>
  </Create>
);
