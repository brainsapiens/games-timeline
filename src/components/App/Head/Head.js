import React from 'react';
import Helmet from 'react-helmet';

import global from '../../../globals';
const {app: {title: appTitle}} = global;

const AppHead = ({title}) => (
    <Helmet
        titleTemplate={`${appTitle} / %s`}
        defaultTitle={appTitle}
        defer={false}
    >
        <title>{title}</title>
    </Helmet>
);

export default AppHead;
