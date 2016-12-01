import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import About from '../../src/javascript/components/about';

describe('The about component', function () {
    const shallowRenderer = TestUtils.createRenderer();

    let aboutComponent,
        aboutData = [
            'this is some about stuff',
            'and even more'
        ];

    before(() => {
        shallowRenderer.render(
            <About data={aboutData} />);

        aboutComponent = shallowRenderer.getRenderOutput();
    });

    it('displays the about component', () => {
        let aboutTitle = ShallowTestUtils.findWithClass(aboutComponent, 'section-title about');

        expect(aboutTitle).to.exist;
    });

    it('displays about text', () => {
        let aboutTexts = ShallowTestUtils.findAllWithClass(aboutComponent, 'about-text');

        expect(aboutTexts).to.have.lengthOf(aboutData.length);
    });

    describe('handles empty data', function () {

        let incompleteAbout;

        before(() => {
            shallowRenderer.render(
                <About />);

            incompleteAbout = shallowRenderer.getRenderOutput();
        });

        it('should not render if no data array is provided', () => {
            expect(incompleteAbout).to.be.null;
        });
    });
});
