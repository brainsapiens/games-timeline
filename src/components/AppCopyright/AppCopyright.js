import React from 'react';
import styled from 'styled-components';

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
            <Copyright>&copy;&nbsp;Copyright {this.currentYear}</Copyright>
        )
    }
}

export default AppCopyright;
