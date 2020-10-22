import React, {Component} from 'react';
import Helmet from 'react-helmet';

import global from '../../../global';

class AppHead extends Component {
    render () {
        const appTitle = global.app.title;
        const {title} = this.props;

        return (
            <Helmet
                titleTemplate={`${appTitle} / %s`}
                defaultTitle={appTitle}
                defer={false}
            >
                <title>{title}</title>
            </Helmet>
        )
    }
}

export default AppHead;
