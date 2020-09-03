import React from 'react';
import { ChipField, SingleFieldList, TextField } from 'react-admin';
import { Column, ColumnShowLayout, Hero, Show } from '../../archipelago-layout';
import UriArrayField from '../../components/UriArrayField';

const UserTitle = ({ record }) => {
  return <span>{record ? `${record['foaf:givenName']} ${record['foaf:familyName']}` : ''}</span>;
};

const UserShow = props => (
  <Show {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero title={<UserTitle />} image={process.env.PUBLIC_URL + '/unknown-user.png'}>
          <TextField label="Prénom" source="foaf:givenName" />
          <TextField label="Nom de famille" source="foaf:familyName" />
          <TextField label="Adresse e-mail" source="foaf:mbox" />
          <TextField label="Téléphone" source="foaf:phone" />
        </Hero>
      </Column>
      <Column xs={12} sm={3} showLabel>
        <UriArrayField label="Responsable de" reference="Organization" source="pair:responsibleOf">
          <SingleFieldList linkType="show">
            <ChipField source="foaf:name" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField label="Participe à" reference="Project" source="pair:involvedIn">
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField label="Compétences" reference="Skill" source="pair:offers">
          <SingleFieldList linkType={false}>
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField label="Intérêts" reference="Interest" source="pair:hasInterest">
          <SingleFieldList linkType={false}>
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default UserShow;
