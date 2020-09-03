import React from 'react';
import { TextField, UrlField } from 'react-admin';
import { Column, ColumnShowLayout, Hero, UserIcon, GridList, Show } from '../../archipelago-layout';
import UriArrayField from '../../components/UriArrayField';

const OrganizationTitle = ({ record }) => {
  return <span>{record ? record['foaf:name'] : ''}</span>;
};

const OrganizationShow = props => (
  <Show {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero title={<OrganizationTitle />} image="foaf:img">
          <TextField label="Objet" source="purl:subject" />
          <TextField label="Date d'arrivée" source="gv:arrivalDate" />
          <TextField label="Statut" source="gv:status" />
          <TextField label="Bâtiment" source="gv:building" />
          <TextField label="Salle" source="gv:room" />
          <TextField label="Type de convention" source="gv:conventionType" />
          <TextField label="Nombre d'employés" source="gv:empoyeesCount" />
          <TextField label="Propositions" source="gv:proposedContribution" />
          <TextField label="Réalisations" source="gv:realisedContribution" />
          <UrlField label="Site web" source="foaf:homepage" />
        </Hero>
      </Column>
      <Column xs={12} sm={3} showLabel>
        <UriArrayField label="Responsables" reference="User" source="pair:hasResponsible">
          <GridList xs={6} linkType="show">
            <UserIcon />
          </GridList>
        </UriArrayField>
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default OrganizationShow;
