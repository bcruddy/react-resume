import React, {Component} from 'react';

import Job from './Job';

export default class Employment extends Component {
    render () {
        let {jobs} = this.props;

        if (!jobs || !jobs.length) {
            return null;
        }

        let jobsList = jobs.map(jobInfo => <Job {...jobInfo} />);

        return (
            <div className='row margin20'>
                <div className='col-md-12'>
                    <h3 className='section-title employment'>Employment</h3>
                    {jobsList}
                </div>
            </div>
        );
    }
}
