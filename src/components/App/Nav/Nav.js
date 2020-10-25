import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import global from '../../../global'
const {pages} = global;

const Nav = styled.nav`
    &:not(:last-child) {
        margin-right: 3.6rem;
    }
`;
const Link = styled(NavLink)`
    &:not(:last-child) {
        margin-right: 1.2rem;
    }
`;

const AppNav = () => {
    const {about} = pages;

    return (
        <Nav role='navigation'>
            <Link to={about.url}>{about.title}</Link>
        </Nav>
    );

};

export default AppNav;
