import React from 'react';
import Helmet from 'react-helmet';

import global from '../../../global';
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
