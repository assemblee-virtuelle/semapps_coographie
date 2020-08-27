import React from 'react';
import { ChipField, SingleFieldList, TextField, UrlField } from 'react-admin';
import { Column, ColumnShowLayout, Hero, UserIcon, GridList, Show } from '../../archipelago-layout';
import MarkDownField from '../../components/MarkdownField';
import UriArrayField from '../../components/UriArrayField';

const ProjectTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

const ProjectShow = props => (
  <Show {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero title={<ProjectTitle />}>
          <TextField label="Courte description" source="pair:comment" />
          <UrlField label="Site web" source="pair:homePage" />
        </Hero>
        <MarkDownField source="pair:description" addLabel />
      </Column>
      <Column xs={12} sm={3} showLabel>
        <UriArrayField
          label="Géré par"
          reference="Organization"
          source="pair:managedBy"
          referenceBasePath="/Organization"
        >
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField label="Responsables" reference="User" source="pair:hasResponsible" referenceBasePath="/User">
          <GridList xs={6} linkType="show">
            <UserIcon />
          </GridList>
        </UriArrayField>
        <UriArrayField label="Participants" reference="User" source="pair:involves" referenceBasePath="/User">
          <GridList xs={6} linkType="show">
            <UserIcon />
          </GridList>
        </UriArrayField>
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default ProjectShow;
