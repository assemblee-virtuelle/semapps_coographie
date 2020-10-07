import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '../../archipelago-layout';

const NoteCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="summary" label="Résumé" fullWidth />
      <TextInput source="content" label="Contenu" fullWidth />
    </SimpleForm>
  </Create>
);

export default NoteCreate;
