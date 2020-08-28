import React from 'react';
import { List as RaList } from 'react-admin';
import ResourceTabs from "./ResourceTabs";
import ListActions from "./ListActions";

const List = ({ children, ...otherProps }) => (
  <RaList actions={<ListActions />} sort={{ field: 'pair:label', order: 'DESC' }} perPage={25} {...otherProps}>
    <>
      <ResourceTabs />
      {children}
    </>
  </RaList>
);

export default List;
