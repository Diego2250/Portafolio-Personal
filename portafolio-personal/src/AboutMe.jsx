import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="ContainerAboutMe">
      <div className="InfoAboutMe">
        <h2>About Me</h2>
        <div className="PhotoContainer">
          <div className="AnimatedBorder" />
          <img src="https://i.ibb.co/vqZkRbd/pp.png" alt="Mi foto" />
        </div>
        <p>Hello world! My name is Diego Morales, I live in Guatemala and I am Computer Science Student and a SAP Developer. Currently, I'm pursuing my third year of Computer Science and Information Technology Engineering at Universidad del Valle de Guatemala. I'm also working at Inforum Solutions as a SAP developer.</p>
        <p>My main interests are in the field of Data Bases and Data analytics. I'm always looking for new challenges and opportunities to learn new things.</p>
        <p>Aside from coding, I love playing videgames, listen to music, whatch football, go to the gym and spend time with my family and friends. I believe in continuous learning and always strive to stay updated with the latest technologies and industry trends.</p>
        <p>Let's see some of the things I can do!</p>
      </div>
    </div>
  );
}

export default AboutMe;
