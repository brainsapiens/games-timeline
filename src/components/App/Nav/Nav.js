import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    &:not(:last-child) {
        margin-right: 3.6rem;
    }
`;
const StyledNavLink = styled(NavLink)`
    &:not(:last-child) {
        margin-right: 1.2rem;
    }
`;

const AppNav = () => (
    <Nav role='navigation'>
        <StyledNavLink to='/about'>About</StyledNavLink>
    </Nav>
);

export default AppNav;
