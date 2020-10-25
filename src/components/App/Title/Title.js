import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import global from '../../../global';

import AppLogo from '../Logo';

const Title = styled.h1`
    margin-right: 3.6rem;
    font-size: 2.5rem;
    font-weight: var(--font-weight-base);
    word-spacing: -.3rem;
`;
const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    color: var(--color-inverse);
    text-decoration: none;
`;

const {app: {title}} = global;

const AppTitle = () => (
    <Title>
        <Link to='/'>
            <AppLogo />
            {title}
        </Link>
    </Title>
);

export default AppTitle;
