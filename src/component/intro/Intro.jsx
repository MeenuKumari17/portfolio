import React from 'react';
import './intro.scss';
import Typed from 'react-typed';



function Intro() {

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/girl.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Meenu Kumari</h1>
          <h3><span>
              <Typed 
                strings={['Frontend Developer', 'MERN Stack Developer', 'Designer']}
                typeSpeed={50}
                backSpeed={50}
                loop
              />
            </span>
          </h3>
        </div>
        
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
        
      </div>
    </div>
  )
}

export default Intro