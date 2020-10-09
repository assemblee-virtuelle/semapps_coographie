import React from 'react';
import { AutocompleteArrayInput, SimpleForm, TextInput } from 'react-admin';
import MarkdownInput from 'ra-input-markdown';
import { Edit } from '../../archipelago-layout';
import { UriArrayInput } from '../../semantic-data-provider';

export const NoteEdit = props => (
  <Edit {...props}>
    <SimpleForm redirect="show">
      <TextInput source="summary" label="Résumé" fullWidth />
      <TextInput source="content" label="Contenu" fullWidth />
    </SimpleForm>
  </Edit>
);

export default NoteEdit;
