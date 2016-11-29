import React from 'react';
import ReactDOM from 'react-dom';

import * as ShallowTestUtils from 'react-shallow-testutils';
import TestUtils from 'react-addons-test-utils';
import {should} from 'chai';

import Resume from '../../src/javascript/components/Resume';
import aboutData from '../../aboutData';

const ResumeFactory = React.createFactory(Resume);

describe('The resume component', function () {
    const shallowRenderer = TestUtils.createRenderer();

    it('renders the about section', () => {
        shallowRenderer.render(<Resume data={aboutData.resume} />);

        let result = shallowRenderer.getRenderOutput(),
            aboutTitle = ShallowTestUtils.findWithClass(result, 'section-name about'),
            aboutText = ShallowTestUtils.findAllWithClass(result, 'about-text');

        expect(aboutTitle.props.children).to.equal('About');
        expect(aboutText.length).to.equal(aboutData.resume.about.length);
    });

    it('renders the skills section', () => {
        shallowRenderer.render(<Resume data={aboutData.resume} />);

        let result = shallowRenderer.getRenderOutput(),
            skillsTitle = ShallowTestUtils.findWithClass('section-name skills');

        expect(aboutTitle.props.children).to.equal('Skills');
    });

    it('renders the technical section', () => {
        shallowRenderer.render(<Resume data={aboutData.resume} />);

        let aboutTitle = ShallowTestUtils.findWithClass('section-name technical');

        expect(aboutTitle.props.children).to.equal('Technical');
    });

    it('renders the employment section', () => {
        shallowRenderer.render(<Resume data={aboutData.resume} />);

        let aboutTitle = ShallowTestUtils.findWithClass('section-name employment');

        expect(aboutTitle.props.children).to.equal('Employment');
    });

    it('renders the projects section', () => {
        shallowRenderer.render(<Resume data={aboutData.resume} />);

        let aboutTitle = ShallowTestUtils.findWithClass('section-name projects');

        expect(aboutTitle.props.children).to.equal('Projects')
    });
});
