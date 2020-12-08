import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import AppLogo from '../Logo';

import global from '../../../globals';
const {app: {title}} = global;

const Title = styled.h1`
    margin-right: 3.6rem;
    font-size: 2.5rem;
    font-weight: var(--font-weight-basic);
    word-spacing: -.3rem;
`;
const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    color: var(--color-lightest);
    text-decoration: none;
`;

const AppTitle = () => (
    <Title>
        <Link to='/' exact>
            <AppLogo />
            {title}
        </Link>
    </Title>
);

export default AppTitle;
