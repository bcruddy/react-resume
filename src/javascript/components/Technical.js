import React, {Component} from 'react';

export default class Technical extends Component {
    render () {
        let technical = this.props.data,
            cssClass = 'col-xs-6 ';

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
}
