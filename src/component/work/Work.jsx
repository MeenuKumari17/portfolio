import React, { useState } from 'react';
import './work.scss'

function Work() {

  const [currentSlide, SetCurrentSlide] = useState(0);

  const data = [
    {
      id : "1",
      icon: "assets/mobile.png",
      title: "Social Media",
      desc: "Social Media app where user can post their photos and add friends also they can like and dislike their posts.",
      img: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/shutterstock_1049564585-960.jpg"
    },
    {
      id: "2",
      icon: "assets/globe.jpg",
      title: "Management",
      desc: "User can add contact also they can ee all contact in list and search them using their provided phone number",
      img: "https://www.airtory.com/blog/wp-content/uploads/2021/12/June_Blog-6.webp"
    },
    {
      id: 3,
      icon: "assets/writing.png",
      title: "Portfolio",
      desc: "Full detail about my profile",
      img: "https://miro.medium.com/max/700/0*Q_JiP0_kME4tliGr.jpg"
    }
  ]

  const handleClick = (way) => {
    way === "left" ? SetCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : SetCurrentSlide(currentSlide < data.length -1 ? currentSlide +1 : 0 )
  }

  return (
    <div className='work' id='work'>
        <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
          {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                  
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
                
              </div>
            </div>
          </div>
          ))}

        </div>
        <img src="assets/right.png" alt="" className='arrow left' onClick={() => handleClick("left")} />
        <img src="assets/right.png" alt="" className='arrow right' onClick={() => handleClick()}/>
    </div>
  )
}

export default Work