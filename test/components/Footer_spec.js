import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import Footer from '../../src/javascript/components/Footer';
import mockData from '../fixtures/mockAboutData';

describe('The footer component', function () {
    const shallowRenderer = TestUtils.createRenderer();

    let footerComponent;

    before(() => {
        shallowRenderer.render(<Footer links={mockData.footerLinks} />);
        footerComponent = shallowRenderer.getRenderOutput();
    });

    it('renders footer links', () => {
        let links = ShallowTestUtils.findAllWithClass(footerComponent, 'footer-link');

        expect(links).to.have.lengthOf(mockData.footerLinks.length);
    });
});
