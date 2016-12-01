import React, {Component} from 'react';
import Head from './Head';
import Body from './Body';

export default class Root extends Component {
    render () {
        return (
            <html>
                <Head />
                {this.props.data ? (
                    <Body data={this.props.data} />
                ) : <body><div className='text-center alert-error'>An error occurred.</div></body>}
            </html>
        );
    }
}
