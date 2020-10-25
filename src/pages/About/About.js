import React, {useEffect} from 'react';

import global from '../../global';

import scrollToTop from '../../helpers/scrollToTop';

import AppHead from '../../components/App/Head';
import UiContainer from '../../components/Ui/Container';
import UiContent from '../../components/Ui/Content';

const {pages: {about: {title}}} = global;

function About () {
    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <AppHead title={title} />
            <UiContainer>
                <UiContent>
                    <section>
                        <h2>Author</h2>
                        <p>Vyacheslav Efremenko</p>
                        <ul>
                            <li>Email: <a href='mailto:brainsapiens@gmail.com' rel='noopener noreferrer'>brainsapiens@gmail.com</a></li>
                            <li>Source code: <a href='https://github.com/brainsapiens/games-timeline' rel='noopener noreferrer' target='_blank'>https://github.com/brainsapiens/games-timeline</a></li>
                        </ul>
                    </section>
                </UiContent>
            </UiContainer>
        </>
    );
}

export default About;
