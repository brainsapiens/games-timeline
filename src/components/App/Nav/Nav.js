import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import globals from '../../../globals';

const {pages} = globals;

const Nav = styled.nav`
  &:not(:last-child) {
    margin-right: 3.6rem;
  }

  a {
    &:not(:last-child) {
      margin-right: 1.2rem;
    }

    &.active {
      color: ${props => props.theme.appNav.linkColorActive};
    }
  }
`;

const AppNav = () => {
    const {about} = pages;

    return (
        <Nav role='navigation'>
            <NavLink to={about.path}>{about.title}</NavLink>
        </Nav>
    );

};

export default AppNav;
