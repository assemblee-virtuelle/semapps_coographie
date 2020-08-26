import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const ProjectCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" label="Nom" fullWidth />
    </SimpleForm>
  </Create>
);

export default ProjectCreate;
