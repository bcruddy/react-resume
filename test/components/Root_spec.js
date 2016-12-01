import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import Root from '../../src/javascript/components/Root';
import Head from '../../src/javascript/components/Head';
import Body from '../../src/javascript/components/Body';

describe('The root component', function () {
    const shallowRenderer = TestUtils.createRenderer();

    let rootComponent;

    before(() => {
        shallowRenderer.render(<Root />);
        rootComponent = shallowRenderer.getRenderOutput();
    });

    it('renders the html element', () => {
        let html = ShallowTestUtils.findWithType(rootComponent, 'html');

        expect(html).to.exist;
    });

    it('renders the head component', () => {
        let head = ShallowTestUtils.findWithType(rootComponent, Head);

        expect(head).to.exist;
    });

    it('displays the body component', () => {
        let body = ShallowTestUtils.findWithType(rootComponent, Body);

        expect(body).to.exist;
    });
});
