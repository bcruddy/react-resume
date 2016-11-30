import React, {Component} from 'react';
import About from './About';
import Skills from './Skills';
import Technical from './Technical';
import Employment from './Employment';
import Projects from './Projects';

export default class Resume extends Component {
    render () {
        let {about, skills, technical, employment, projects} = this.props.data;

        return (
            <section className='container-fluid"'>
                <div className='container'>
                    <About data={about} />
                    <Skills data={skills} />
                    <Technical data={technical} />
                    <Employment data={employment} />
                    <Projects data={projects} />
                </div>
            </section>
        );
    }
}
