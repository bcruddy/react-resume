import React from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import * as mockData from '../fixtures/mockAboutData';

import Body from '../../src/javascript/components/Body';
import Tagline from '../../src/javascript/components/Tagline';
import Resume from '../../src/javascript/components/Resume';
import Footer from '../../src/javascript/components/Footer';

describe('The body component', function () {
    const shallowRenderer = TestUtils.createRenderer();

    let bodyComponent;

    before(() => {
        shallowRenderer.render(<Body data={mockData} />);
        bodyComponent = shallowRenderer.getRenderOutput();
    });

    it('renders the tagline', () => {
        let taglineComponent = ShallowTestUtils.findWithType(bodyComponent, Tagline);

        expect(taglineComponent).to.exist;
    });

    it('renders the resume', () => {
        let resumeComponent = ShallowTestUtils.findWithType(bodyComponent, Resume);

        expect(resumeComponent).to.exist;
    });

    it('renders the footer', () => {
        let footerComponent = ShallowTestUtils.findWithType(bodyComponent, Footer);

        expect(footerComponent).to.exist;
    });
});
