import React from 'react'

import Card from '../Card/Card'
import CustomeButton from '../CustomeButton/CustomeButton'

import './Skills.scss'

export default function Skills({propRef}) {
  return (
    <div className='skills' id='Skills' ref={propRef}
    >
      <div className="skills-banner">
        <h2>
          Skills
          </h2> 
          <h4>
            A short listed breif of my skills and education
          </h4>
          <p>You can also download my resume from the link below</p>
          <CustomeButton cName='outlined' >Resume</CustomeButton>
          
      </div>

    <div className="skills-card-container">
    <Card>
      <h3>Primary Skills</h3>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript + ES6</li>
        <li>JSX</li>
        <li>React</li>
        <li>Git</li>
        <li>NPM</li>
        <li>Python</li>
      </ul>
    </Card>
    <Card>
    <h3>Libraries & Tools</h3>
      <ul>
        <li>Redux</li>
        <li>Sass</li>
        <li>React-Router V6</li>
        <li>FireBase</li>
        <li>Bootstrap</li>
        <li>Material-UI</li>
      </ul>
    </Card>

    <Card>
    <h3>Education</h3>
      <ul>
        <li>Computer Science Bachelor Degree
          <div className='subtitle'>graduated in 2021 from Razi University</div>
        </li>
        
        </ul>
    </Card>

    </div>
    </div>
  )
}
