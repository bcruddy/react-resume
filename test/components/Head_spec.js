import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import Head from '../../src/javascript/components/Head';
import mockData from '../fixtures/mockAboutData';

describe('The head component', function () {
    const shallowRenderer = TestUtils.createRenderer();

    let headComponent;

    before(() => {
        shallowRenderer.render(<Head />);
        headComponent = shallowRenderer.getRenderOutput();
    });

    it('renders the title', () => {
        let title = ShallowTestUtils.findWithType(headComponent, 'title');

        expect(title).to.exist;
        expect(title.props.children).to.equal('static cv');
    });

    it('renders two stylesheets', () => {
        let linkElements = ShallowTestUtils.findAllWithType(headComponent, 'link');

        expect(linkElements).to.have.lengthOf(2);
    });

    it('renders the mobile meta tag', () => {
        let mobileMetaTag = ShallowTestUtils.findWithType(headComponent, 'meta');

        expect(mobileMetaTag).to.exist;
        expect(mobileMetaTag.props.name).to.equal('viewport');
        expect(mobileMetaTag.props.content).to.equal('width=device-width, initial-scale=1');
    });
});
