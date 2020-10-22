import React from 'react';

import global from '../../global';

import AppHead from '../../components/App/Head';
import UiContainer from '../../components/Ui/Container';
import UiContent from '../../components/Ui/Content';

function About () {
    const {title} = global.pages.about;

    return (
        <>
            <AppHead title={title} />
            <UiContainer>
                <UiContent>
                    <section>
                        <h2>Title</h2>
                        <p>Text</p>
                    </section>
                </UiContent>
            </UiContainer>
        </>
    );
}

export default About;
