import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from "../../archipelago-layout";

const InterestCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" label="Titre" />
    </SimpleForm>
  </Create>
);

export default InterestCreate;
