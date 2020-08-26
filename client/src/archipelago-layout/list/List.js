import React from 'react';
import { List as RaList } from 'react-admin';
import ResourceTabs from "./ResourceTabs";

const List = ({ children, ...otherProps }) => (
  <RaList perPage={50} {...otherProps}>
    <>
      <ResourceTabs />
      {children}
    </>
  </RaList>
);

export default List;
