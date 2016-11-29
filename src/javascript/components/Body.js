import React, {Component} from 'react';
import Tagline from './Tagline';
import Resume from './Resume';
import Footer from './Footer';

import aboutData from '../../../aboutData';

export default class Body extends Component {
    render () {
        return (
            <body>
                <Tagline
                    title={aboutData.fullName}
                    lead={`${aboutData.title} - ${aboutData.location}`} />
                <Resume data={aboutData.resume} />
                <Footer data={aboutData.contact} />
            </body>
        );
    }
}
