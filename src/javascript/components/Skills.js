import React, {Component} from 'react';

 export default class Skills extends Component {
     render () {
         let skills = this.props.data,
             cssClass, skillsList;

         if (!skills || !skills.length) {
             return null;
         }

         if (skills.length === 3) {
             cssClass = 'col-sm-4';
         }
         else if (skills.length === 4) {
             cssClass = 'col-sm-3';
         }
         else {
             cssClass = 'col-sm-6';
         }

         skillsList = skills.map(skill => (
             <div className={cssClass} key={skill.title}>
                 <h4>{skill.title}</h4>
                 <p>{skill.summary}</p>
             </div>
         ));

         return (
             <div className='row margin20'>
                 <div className='col-md-12'>
                     <h3 className='section-title skills"'>Skills</h3>
                     {skillsList}
                 </div>
             </div>
         );
     }
 }
