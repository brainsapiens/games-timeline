import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import global from '../../../global';

const Text = styled.p`
    color: #666;
    text-align: center;
`;

class AppCopyright extends Component {
    get currentYear () {
        return new Date().getFullYear();
    }

    render () {
        const {title} = global.app;

        return (
            <Text>
                &copy;&nbsp;{this.currentYear} <NavLink to='/' exact>{title}</NavLink>
            </Text>
        )
    }
}

export default AppCopyright;
