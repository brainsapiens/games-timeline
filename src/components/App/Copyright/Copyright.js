import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import globals from '../../../global';

const Text = styled.p`
    color: #666;
    text-align: center;
`;

class AppCopyright extends Component {
    get currentYear () {
        return new Date().getFullYear();
    }

    render () {
        return (
            <Text>
                &copy;&nbsp;{this.currentYear} <NavLink to='/' exact>{globals.app.title}</NavLink>
            </Text>
        )
    }
}

export default AppCopyright;
