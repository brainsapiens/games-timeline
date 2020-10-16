import React from 'react';
import styled from 'styled-components';

import globals from '../../globals';

const Copyright = styled.p`
    color: #666;
    text-align: center;
`

class AppCopyright extends React.Component {
    get currentYear () {
        const currentYear = new Date().getFullYear();

        return currentYear;
    }

    render () {
        return (
            <Copyright>&copy;&nbsp;{this.currentYear} {globals.app.title}</Copyright>
        )
    }
}

export default AppCopyright;
