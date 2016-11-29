import React, {Component} from 'react';
import Head from './Head';
import Body from './Body';

export default class Root extends Component {
    render () {
        return (
            <html>
                <Head />
                <Body />
            </html>
        );
    }
}
