import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import Tagline from '../../src/javascript/components/Tagline';

describe('The tagline component', function () {
    const shallowRenderer = TestUtils.createRenderer();

    let taglineComponent,
        taglineData = {
            fullName: 'steve smith',
            lead: 'actual crazy person'
        };

    before(() => {
        shallowRenderer.render(
            <Tagline
                fullName={taglineData.fullName}
                lead={taglineData.lead}
            />);

        taglineComponent = shallowRenderer.getRenderOutput();
    });

    it('displays the header', () => {
        let header = ShallowTestUtils.findWithType(taglineComponent, 'header');

        expect(header).to.exist;
    });

    it('displays the full name correctly', () => {
        let name = ShallowTestUtils.findWithType(taglineComponent, 'h1');

        expect(name).to.exist;
        expect(name.props.children).to.equal(taglineData.fullName);
    });

    it('displays the lead text when it exists', () => {
        let lead = ShallowTestUtils.findWithClass(taglineComponent, 'lead-text');

        expect(lead).to.exist;
        expect(lead.props.children).to.equal(taglineData.lead);
    });

    describe('handles empty lead', function () {

        let incompleteTagline;

        before(() => {
            shallowRenderer.render(
                <Tagline
                    fullName={taglineData.fullName}
                />);

            incompleteTagline = shallowRenderer.getRenderOutput();
        });

        it('still renders the h1 full name', () => {
            let name = ShallowTestUtils.findWithType(taglineComponent, 'h1');

            expect(name).to.exist;
            expect(name.props.children).to.equal(taglineData.fullName);
        });

        it('by not rending the lead text element at all', () => {

            let leads = ShallowTestUtils.findAllWithClass(incompleteTagline, 'lead-text');

            expect(leads).to.have.lengthOf(0);
        });
    });


});
