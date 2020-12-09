import React, {useMemo} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import globals from '../../../globals';

const {app: {title}} = globals;

const Text = styled.p`
  text-align: center;

  a {
    &.active {
      color: ${props => props.theme.appCopyright.linkColorActive};
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
