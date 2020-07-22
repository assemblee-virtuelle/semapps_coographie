import React from 'react';
import {
  List,
  Datagrid,
  useAuthenticated,
  Edit,
  Create,
  SimpleForm,
  EditButton,
  TextInput,
  AutocompleteArrayInput} from 'react-admin';
import Icon from '@material-ui/icons/School';
import { StringField } from '@semapps/react-admin';
import { JsonLdReferenceInput, UriInput } from '@semapps/react-admin';

export const SkillIcon = Icon;

const SkillTitle = ({ record }) => {
  return <span>Compétence {record ? `${record['pair:label']}` : ''}</span>;
};

export const SkillList = props => {
  useAuthenticated();
  return (
    <List title="Compétences" perPage={25} {...props}>
      <Datagrid>
        <StringField source="pair:label" label="Nom" />
        <EditButton basePath="/Skill" />
      </Datagrid>
    </List>
  );
};

export const SkillEdit = props => {
  useAuthenticated();
  return (
    <Edit title={<SkillTitle />} {...props}>
      <SimpleForm>
        <TextInput source="pair:label" label="Nom" />
        <JsonLdReferenceInput label="offerte par" reference="Person" source="pair:offeredBy">
          <AutocompleteArrayInput
            optionText={record =>{console.log(record);return (record && `${record['pair:firstName']} ${record['pair:lastName']}`) || 'LABEL MANQUANT'}}
            fullWidth
          />
        </JsonLdReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
