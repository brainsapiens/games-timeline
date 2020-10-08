import React from 'react';
import styled from 'styled-components';

import TimelineTable from './../TimelineTable';

const Container = styled.div`
    padding: 12px 16px;
`;

class AppMain extends React.Component {
    render () {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default AppMain;
