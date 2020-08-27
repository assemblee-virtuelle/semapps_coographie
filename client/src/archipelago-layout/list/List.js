import React from 'react';
import { List as RaList } from 'react-admin';
import ResourceTabs from "./ResourceTabs";

const List = ({ children, ...otherProps }) => (
  <RaList sort={{ field: 'pair:label', order: 'DESC' }} perPage={25} {...otherProps}>
    <>
      <ResourceTabs />
      {children}
    </>
  </RaList>
);

export default List;
