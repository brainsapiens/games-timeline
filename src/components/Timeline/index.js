import React from 'react';
import styled from 'styled-components';

import TimelineTable from './Table';

const Timeline = styled.div`
    position: relative;
    width: 100vw;
    
    &::before,
    &::after {
        position: absolute;
        z-index: 200;
        bottom: 0;
        left: 0;
        background-color: var(--border-color-base);
        content: "";
    }
    &::before {
        width: 1px;
        height: 100%;
    }
    &::after {
        width: 100%;
        height: 1px;
    }
`;

export default () => (
    <Timeline>
        <TimelineTable />
    </Timeline>
);
