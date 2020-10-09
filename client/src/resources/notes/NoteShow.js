import React from 'react';
import { TextField, UrlField } from 'react-admin';
import { Column, ColumnShowLayout, Hero, UserIcon, GridList, Show, MarkdownField } from '../../archipelago-layout';
import { UriArrayField } from '../../semantic-data-provider';

const OrganizationTitle = ({ record }) => {
  return <span>{record ? record['summary'] : ''}</span>;
};

const NoteShow = props => (
  <Show {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero title={<OrganizationTitle />}>
          {/*<TextField label="Courte description" source="content" />*/}
          {/*<UrlField label="Site web" source="pair:homePage" />*/}
        </Hero>
        <MarkdownField source="content" addLabel />
      </Column>
      <Column xs={12} sm={3} showLabel>
        {/*<UriArrayField label="Membres" reference="User" source="pair:hasMember" referenceBasePath="/User">*/}
        {/*  <GridList xs={6} linkType="show">*/}
        {/*    <UserIcon />*/}
        {/*  </GridList>*/}
        {/*</UriArrayField>*/}
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default NoteShow;
