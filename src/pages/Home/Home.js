import React from 'react';

import AppHead from '../../components/App/Head';
import Timeline from '../../components/Timeline';

//TODO: <AppHead /> causes warning in console

function Home () {
    return (
        <>
            <AppHead />
            <Timeline />
        </>
    );
}

export default Home;
