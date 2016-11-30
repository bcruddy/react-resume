import React from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {expect} from 'chai';

import Resume from '../../src/javascript/components/Resume';
import About from '../../src/javascript/components/About';
import Skills from '../../src/javascript/components/Skills';
import Technical from '../../src/javascript/components/Technical';
import Employment from '../../src/javascript/components/Employment';
import Projects from '../../src/javascript/components/Projects';

import aboutData from '../fixtures/mockAboutData';

describe('The resume component', function () {
    const shallowRenderer = TestUtils.createRenderer();

    let resumeComponent;

    before(() => {
        shallowRenderer.render(<Resume data={aboutData.resume} />);
        resumeComponent = shallowRenderer.getRenderOutput();
    });

    it('renders the about section', () => {
        let aboutComponent = ShallowTestUtils.findWithType(resumeComponent, About);

        expect(aboutComponent).to.exist;
    });

    it('renders the skills section', () => {
        let skillsComponent = ShallowTestUtils.findWithType(resumeComponent, Skills);

        expect(skillsComponent).to.exist;
    });

    it('renders the technical section', () => {
        let technicalComponent = ShallowTestUtils.findWithType(resumeComponent, Technical);

        expect(technicalComponent).to.exist;
    });

    it('renders the employment section', () => {
        let employmentComponent = ShallowTestUtils.findWithType(resumeComponent, Employment);

        expect(employmentComponent).to.exist;
    });

    it('renders the projects section', () => {
        let projectsComponent = ShallowTestUtils.findWithType(resumeComponent, Projects);

        expect(projectsComponent).to.exist;
    });
});
