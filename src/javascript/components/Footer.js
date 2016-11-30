import React, {Component} from 'react';

export default class Footer extends Component {
    renderFooterLinks () {
        let {links} = this.props;

        if (!links && !links.length) {
            return null;
        }

        let linkItems = links.map((link, index) => (
            <li key={'idx' + index}>
                <a href={link.url} target='_blank' className='footer-link'>
                    {link.faClassName ?
                    (<i className={`fa fa-2x ${link.faClassName}`}></i>) :
                    link.title}
                </a>
            </li>
        ));

        return (
            <ul className='list-inline'>
                {linkItems}
            </ul>
        );
    }

    render () {
        return (
            <footer className='container-fluid'>
                <div className='container'>
                    <div className='col-md-12 text-center'>
                        <p>
                            <small>{new Date().getFullYear()} &copy;</small>
                        </p>
                        {this.renderFooterLinks()}
                    </div>
                </div>
            </footer>
        );
    }
}
