import React, {Component} from 'react';

export default class About extends Component {
    render () {
        let about = this.props.data;

        return about && about.length ? (
            <div className='row margin20'>
                <div className='col-md-12'>
                    <h3 className='section-title about'>About</h3>
                    <div className='col-md-12'>
                    {about.map((text, index) =>
                        (<p className='about-text' key={'idx' + index}>{text}</p>))}
                    </div>
                </div>
            </div>
        ) : null;
    }
}
