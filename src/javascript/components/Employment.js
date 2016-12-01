import React, {Component} from 'react';

export default class Employment extends Component {
    render () {
        let employment = this.props.data;

        if (!employment || !employment.length) {
            return null;
        }

        let sections = employment.map(job => (
            <div className='employment-tile col-md-12' key={job.startDate}>
                <h4 className='company-name'>
                    {job.companyName}
                    <small style={{marginLeft: 10 + 'px'}} className='text-muted employment-dates'>
                        <em>{job.startDate} - {job.endDate}</em>
                    </small>
                </h4>
                <h5 className='job-title'>{job.title}</h5>
                {job.description && job.description.length ? (
                    job.description.map((desc, index) => (
                        <p className='job-description' key={'idx' + index}>{desc}</p>
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
}
