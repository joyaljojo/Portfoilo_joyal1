import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="CourseRegister" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="TrafficSignal" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Restaurant" />
        <ProjectBox projectPhoto={TindogImage} projectName="Weatherapp" />
      </div>

    </div>
  )
}

export default Projects