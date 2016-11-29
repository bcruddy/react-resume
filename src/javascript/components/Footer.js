import React, {Component} from 'react';

export default class Footer extends Component {
    renderContactMethods (itemKey, index) {
        let {data} = this.props;

        return Object.keys(data).length ? (
            <ul className="list-inline">
                {Object.keys(data)
                    .filter(itemKey => itemKey !== 'email')
                    .map((itemKey, index) =>
                    <li key={'idx' + index}>
                        <a href={this.props.data[itemKey]}>{itemKey}</a>
                    </li>)}
            </ul>
        ) : null;
    }

    render () {
        return (
            <footer className="container-fluid">
                <div className="container">
                    <div className="col-md-12 text-center">
                        {this.renderContactMethods()}
                    </div>
                </div>
            </footer>
        );
    }
}
