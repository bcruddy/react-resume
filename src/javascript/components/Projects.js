import React, {Component} from 'react';

export default class Projects extends Component {
    render () {
        let projects = this.props.data;

        if (!projects || !projects.length) {
            return null;
        }

        let sections = projects.map(proj => (
            <div className='col-md-12 project-tile' key={proj.name}>
                <h4 className='project-name'>
                    {proj.url && proj.url.length ? (
                        <a href={proj.url} target='_blank'>{proj.name}</a>
                    ) : proj.name}
                    <small style={{marginLeft: 10 + 'px'}} className='text-muted'>
                        <em>{proj.dates}</em>
                    </small>
                </h4>
                {proj.description && proj.description.length ? (
                    proj.description.map((desc, index) => (
                        <p key={'idx' + index}>{desc}</p>
                    ))
                ) : null}
            </div>
        ));

        return (
            <div className='row margin20'>
                <div className='col-md-12'>
                    <h3 className='section-title projects'>Projects</h3>
                    {sections}
                </div>
            </div>
        );
    }
}
