import React from 'react';
import { ChipField, Show, SingleFieldList, TextField } from 'react-admin';
import { Column, ColumnShowLayout, Hero, ShowActions } from '../../archipelago-layout';
import UriArrayField from '../../components/UriArrayField';

const UserTitle = ({ record }) => {
  return <span>{record ? `${record['pair:firstName']} ${record['pair:lastName']}` : ''}</span>;
};

const UserShow = props => (
  <Show actions={<ShowActions />} {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero title={<UserTitle />} image={process.env.PUBLIC_URL + '/unknown-user.png'}>
          <TextField label="Prénom" source="pair:firstName" />
          <TextField label="Nom de famille" source="pair:lastName" />
        </Hero>
      </Column>
      <Column xs={12} sm={3} showLabel>
        <UriArrayField label="Membre" reference="Organization" source="pair:memberOf">
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
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
