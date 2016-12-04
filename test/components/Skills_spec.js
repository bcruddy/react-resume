import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import Skills from '../../src/javascript/components/Skills';

describe('The skills component', function () {
    const shallowRenderer = TestUtils.createRenderer(),
        skillsData = [{
            title: 'boogie man',
            summary: 'super good at hiding under beds and scary people'
        }, {
            title: 'dog walker',
            summary: 'walk lots of dogs at once'
        }];

    it('displays the skills section with 2 skills', () => {
        shallowRenderer.render(<Skills data={skillsData} />);

        let skillsComponent = shallowRenderer.getRenderOutput();
        let skills = ShallowTestUtils.findAllWithClass(skillsComponent, 'col-sm-6');

        expect(skills).to.have.lengthOf(2);
    });

    it('displays the skills section with 3 skills', () => {
        skillsData.push({title: 'job 3', summary: 'job 3 summary'});

        shallowRenderer.render(<Skills data={skillsData} />);

        let skillsComponent = shallowRenderer.getRenderOutput();
        let skills = ShallowTestUtils.findAllWithClass(skillsComponent, 'col-sm-4');

        expect(skills).to.have.lengthOf(3);
    });

    it('displays the skills section with 4 skills', () => {
        skillsData.push({title: 'job 4', summary: 'job 4 summary'});

        shallowRenderer.render(<Skills data={skillsData} />);

        let skillsComponent = shallowRenderer.getRenderOutput();
        let skills = ShallowTestUtils.findAllWithClass(skillsComponent, 'col-sm-3');

        expect(skills).to.have.lengthOf(4);
    });
});
