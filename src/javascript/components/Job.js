import React, {Component} from 'react';

export default class Job extends Component {

    renderDescription () {
        const {description} = this.props;

        if (!description || !description.length) {
            return null;
        }

        return description.map((desc, index) => (
            <p className='job-description' key={'idx' + index}>{desc}</p>
        ));
    }

    render () {
        const {companyName, title, startDate, endDate} = this.props;

        return (
            <div className='employment-tile col-md-12' key={startDate}>
                <h4 className='company-name'>
                    {companyName}
                    <small style={{marginLeft: 10 + 'px'}} className='text-muted employment-dates'>
                        <em>{startDate} - {endDate}</em>
                    </small>
                </h4>
                <h5 className='job-title'>{title}</h5>
                {this.renderDescription()}
            </div>
        );
    }

}
