import React, {useMemo} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import global from '../../../global';
const {app: {title}} = global;

const Text = styled.p`
    color: #666;
    text-align: center;
`;

const AppCopyright = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <Text>
            &copy;&nbsp;{currentYear} <NavLink to='/' exact>{title}</NavLink>
        </Text>
    );
};

export default AppCopyright;
