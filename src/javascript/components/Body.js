import React, {Component} from 'react';
import Tagline from './Tagline';
import Resume from './Resume';
import Footer from './Footer';

export default class Body extends Component {
    render () {
        const {fullName, title, location, resume, footerLinks} = this.props.data;

        return (
            <body>
                <Tagline
                    fullName={fullName}
                    lead={`${title} - ${location}`} />
                <Resume data={resume} />
                <Footer links={footerLinks} />
            </body>
        );
    }
}
