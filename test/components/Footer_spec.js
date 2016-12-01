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

    it('displays the footer', () => {
        let footer = ShallowTestUtils.findWithType(footerComponent, 'footer');

        expect(footer).to.exist;
    });

    it('displays footer links when they exist', () => {
        let links = ShallowTestUtils.findAllWithClass(footerComponent, 'footer-link');

        expect(links).to.have.lengthOf(mockData.footerLinks.length);
    });

    describe('handles no footer links', () => {
        let incompleteFooter;

        before(() => {
            shallowRenderer.render(<Footer />);
            incompleteFooter = shallowRenderer.getRenderOutput();
        });

        it('display copyright', () => {
            let copyright = ShallowTestUtils.findWithClass(incompleteFooter, 'copyright');

            expect(copyright).to.exist;
        });

        it('does not render an empty list', () => {
            let links = ShallowTestUtils.findAllWithClass('footer-link'),
                list = ShallowTestUtils.findAllWithType('ul');

            expect(links).to.have.lengthOf(0);
            expect(list).to.have.lengthOf(0);
        });
    });
});
