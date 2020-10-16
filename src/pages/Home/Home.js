import React from 'react';

import AppHead from '../../components/App/Head';
import TimelineTable from '../../components/TimelineTable';

//TODO: <AppHead /> causes warning in console

function Home () {
    return (
        <>
            <AppHead />
            <TimelineTable />
        </>
    );
}

export default Home;
