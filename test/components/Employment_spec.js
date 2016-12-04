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

    let employmentComponent;

    before(() => {
        shallowRenderer.render(<Employment jobs={employment} />);

        employmentComponent = shallowRenderer.getRenderOutput();
    });

    it('displays the employment section', () => {
        let sectionTitle = ShallowTestUtils.findWithClass(employmentComponent, 'section-title employment');

        expect(sectionTitle).to.exist;
    });

    describe('it does not display anything when no data is given', function () {
        let emptyComponent;

        before(() => {
            shallowRenderer.render(<Employment />);

            emptyComponent = shallowRenderer.getRenderOutput();
        });
    });
});
