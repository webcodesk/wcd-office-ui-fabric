import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import Application from '@webcodesk/react-app-framework';
import './index.css';
import globalSettings from './app/settings';

let schema: any;
let userComponents: any;
let userFunctions: any;
let packageJson: any = {};

if (process.env.NODE_ENV !== 'production') {
  schema = require('./app/schema').default;
  userComponents = require('./app/indices/userComponents').default;
  userFunctions = require('./app/indices/userFunctions').default;
  packageJson = require('../package.json');

} else {
  schema = require('./app/schema-prod').default;
  userComponents = require('./app/indices-prod/userComponents').default;
  userFunctions = require('./app/indices-prod/userFunctions').default;
}


ReactDOM.render(
  <Application
    name={packageJson.name}
    version={packageJson.version}
    schema={schema}
    userComponents={userComponents}
    userFunctions={userFunctions}
  />,
  document.getElementById('root')
);
