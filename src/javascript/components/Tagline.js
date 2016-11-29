import React, {Component} from 'react';

export default class Tagline extends Component {
    render () {
        return (
            <header className="jumbotron">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    {this.props.lead ? (
                        <p class="lead">{this.props.lead}</p>
                    ) : null}
                </div>
            </header>
        );
    }
}
