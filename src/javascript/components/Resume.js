import React, {Component} from 'react';

export default class Resume extends Component {
    renderAbout () {
        let {about} = this.props.data;

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

    renderSkills () {
        let {skills} = this.props.data,
            cssClass;

        if (!skills || !skills.length) {
            return null;
        }

        if (skills.length === 3) {
            cssClass = 'col-md-4';
        }
        else if (skills.length === 4) {
            cssClass = 'col-md-3';
        }
        else {
            cssClass = 'col-sm-6';
        }

        return (
            <div className='row margin20'>
                <div className='col-md-12'>
                    <h3 className='section-title skills"'>Skills</h3>
                    {skills.map(skill => (
                        <div className={cssClass} key={skill.title}>
                            <h4>{skill.title}</h4>
                            <p>{skill.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    renderTechnical () {
        let {technical} = this.props.data,
            cssClass = 'text-center ';

        if (!technical || !technical.length) {
            return null;
        }

        if (technical.length === 3) {
            cssClass += 'col-md-4';
        }
        else if (technical.length === 4) {
            cssClass += 'col-md-3';
        }
        else {
            cssClass += 'col-sm-6';
        }

        return (
            <div className='row margin20'>
                <div className='col-md-12'>
                    <h3 className='section-title technical'>Technical</h3>
                    {technical.map((list, index) => {
                        return list.length ? (
                            <div className={cssClass} key={'idx' + index}>
                                <ul className="list-unstyled technical-list">
                                    {list.map((item, i) => (
                                        <li key={'inner' + i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null;
                    })}
                </div>
            </div>
        );

    }

    renderEmployment () {
        let {employment} = this.props.data;

        if (!employment || !employment.length) {
            return null;
        }

        let sections = employment.map(job => (
            <div className='employment-tile col-md-12' key={job.startDate}>
                <h4 className='company-name'>
                    {job.companyName}
                    <small style={{marginLeft: 10 + 'px'}} className='text-muted'>
                        <em>{job.startDate} - {job.endDate}</em>
                    </small>
                </h4>
                <h5>{job.title}</h5>
                {job.description && job.description.length ? (
                    job.description.map((desc, index) => (
                        <p key={'idx' + index}>{desc}</p>
                    ))
                ) : null}
            </div>
        ));

        return (
            <div className='row margin20'>
                <div className='col-md-12'>
                    <h3 className='section-title employment'>Employment</h3>
                    {sections}
                </div>
            </div>
        );
    }

    renderProjects () {
        let {projects} = this.props.data;

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

    render () {

        return (
            <section className='container-fluid"'>
                <div className='container'>
                    {this.renderAbout()}
                    {this.renderSkills()}
                    {this.renderTechnical()}
                    {this.renderEmployment()}
                    {this.renderProjects()}
                </div>
            </section>
        );
    }
}
