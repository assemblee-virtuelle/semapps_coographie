import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '../../archipelago-layout';

const EventCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" label="Nom" fullWidth />
    </SimpleForm>
  </Create>
);

export default EventCreate;
