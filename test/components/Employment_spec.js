import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import {resume} from '../fixtures/mockAboutData';
import Employment from '../../src/javascript/components/Employment';


describe('The employment component', function () {
    const {employment} = resume,
        shallowRenderer = TestUtils.createRenderer();

    let employmentComponent,
        recentJob = employment[0];

    before(() => {
        shallowRenderer.render(<Employment data={employment} />);

        employmentComponent = shallowRenderer.getRenderOutput();
    });

    it('displays the company name', () => {
        let job = ShallowTestUtils.findAllWithClass(employmentComponent, 'company-name')[0];

        expect(job).to.exist;
        expect(job.props.children[0]).to.equal('IBM');
    });

    it('displays the date range', () => {
        let dateRange = ShallowTestUtils.findAllWithClass(employmentComponent, 'employment-dates')[0];

        expect(dateRange).to.exist;
    });

    it('displays job title', () => {
        let title = ShallowTestUtils.findAllWithClass(employmentComponent, 'job-title')[0];

        expect(title).to.exist;
        expect(title.props.children).to.equal(employment[0].title);
    });

    it('displays discription if it exists', () => {
        let description = ShallowTestUtils.findAllWithClass(employmentComponent,
            'job-description')[0];

        expect(description).to.exist;
        expect(description.props.children).to.equal(employment[0].description[0]);
    });

    describe('handle missing or bad data', function () {
        let incompleteEmployment,
            incData = [{
                companyName: 'Acme',
                startDate: 'foo',
                endDate: 'bar',
                title: 'baz'
            }];

        before(() => {
            shallowRenderer.render(<Employment data={incData} />);

            incompleteEmployment = shallowRenderer.getRenderOutput();
        });

        it('doesnt render job description at all if missing', () => {
            it('displays discription if it exists', () => {
                let descriptions = ShallowTestUtils.findAllWithClass(incompleteEmployment,
                    'job-description');

                expect(descriptions).to.have.lenghtOf(0);
            });
        });

    });

    describe('handle no data', function () {
        let emptyEmployment;

        before(() => {
            shallowRenderer.render(
                <Employment />);

            emptyEmployment = shallowRenderer.getRenderOutput();
        });

        it('should not render anything if no data array is provided', () => {
            expect(emptyEmployment).to.be.null;
        });
    });
});
