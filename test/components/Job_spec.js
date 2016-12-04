import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import Job from '../../src/javascript/components/Job';


describe('The job component', function () {
    const jobData = {
            companyName: 'Acme Co',
            startDate: 'October 1984',
            endDate: 'December 2007',
            title: 'Manager',
            description: [
                'I was really really bad at my job.',
                'Almost kill our only customer a lot, no idea why I was never fired.'
            ]
        },
        shallowRenderer = TestUtils.createRenderer();

    let jobComponenet;

    before(() => {
        shallowRenderer.render(<Job {...jobData} />);

        jobComponenet = shallowRenderer.getRenderOutput();
    });

    it('creates a job element', () => {
        let job = ShallowTestUtils.findWithClass(jobComponenet, 'employment-tile');

        expect(job).to.exist;
    });

    it('displays comany name', () => {
        let company = ShallowTestUtils.findWithClass(jobComponenet, 'company-name');

        expect(company).to.exist;
        expect(company.props.children[0]).to.equal(jobData.companyName);
    });

    it('displays employment dates', () => {
        let dates = ShallowTestUtils.findWithClass(jobComponenet, 'employment-dates');

        expect(dates).to.exist;
    });

    it('displays a job title', () => {
        let title = ShallowTestUtils.findWithClass(jobComponenet, 'job-title');

        expect(title).to.exist;
        expect(title.props.children).to.equal(jobData.title);
    });

    it('displays the description when given', () => {
        let description = ShallowTestUtils.findAllWithClass(jobComponenet, 'job-description')[0];

        expect(description).to.exist;
        expect(description.props.children).to.equal(jobData.description[0]);
    });

    describe('missing a description', () => {

        const jobDataNoDesc = {
                companyName: 'IBM',
                startDate: 'Oct 2016',
                endDate: 'Current',
                title: 'Developer'
            },
            shallowRenderer = TestUtils.createRenderer();

        let jobNoDescComponent;

        before(() => {
            shallowRenderer.render(<Job {...jobDataNoDesc} />);

            jobNoDescComponent = shallowRenderer.getRenderOutput();
        });

        it('does not render an empty p tag when no description is givien', () => {
            let description = ShallowTestUtils.findAllWithClass(jobNoDescComponent, 'job-description')[0];

            expect(description).not.to.exist;
        });

    });
});
