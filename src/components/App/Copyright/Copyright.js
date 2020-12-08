import React, {useMemo} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import global from '../../../globals';
const {app: {title}} = global;

const Text = styled.p`
    color: var(--color-muted);
    text-align: center;
`;
const Link = styled(NavLink)`
  &.active {
    color: var(--color-muted);
  }
`;

const AppCopyright = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <Text>
            &copy;&nbsp;{currentYear} <Link to='/' exact>{title}</Link>
        </Text>
    );
};

export default AppCopyright;
