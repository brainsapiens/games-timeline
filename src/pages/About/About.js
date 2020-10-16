import React from 'react';

import globals from '../../global';

import AppHead from '../../components/App/Head';
import UiContainer from '../../components/Ui/Container';

function About () {
    const {title} = globals.pages.about;

    return (
        <>
            <AppHead title={title} />
            <UiContainer>
                {title}
            </UiContainer>
        </>
    );
}

export default About;
