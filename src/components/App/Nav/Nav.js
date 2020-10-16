import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

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

class AppNav extends Component {
    render () {
        return (
            <Nav role='navigation'>
                <Link to='/about'>About</Link>
            </Nav>
        )
    }
}

export default AppNav;
