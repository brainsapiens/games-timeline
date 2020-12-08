import React, {useMemo} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import globals from '../../../globals';

const {app: {title}} = globals;

const Text = styled.p`
  color: var(--color-muted);
  text-align: center;

  a {
    color: ${props => props.theme.appCopyright.linkColor};

    &.active {
      color: var(--color-muted);
    }
  }
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
