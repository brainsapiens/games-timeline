import React from 'react';
import Helmet from 'react-helmet';

import globals from '../../../globals';

const {app: {title: appTitle}} = globals;

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
