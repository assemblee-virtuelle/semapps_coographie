import React from 'react';
import { Create as RaCreate } from 'react-admin';
import CreateActions from './CreateActions';

const Create = props => <RaCreate actions={<CreateActions />} {...props} />;

export default Create;
