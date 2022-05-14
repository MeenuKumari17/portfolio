import React, { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contantPortfolio
} from '../../data';






function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setdata] = useState([]);
  

  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'mobile',
      title: 'Mobile App'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'content',
      title: 'Content'
    }
  ]
  

  useEffect(() => {
    
    switch(selected){
      
      case "featured":
        setdata(featuredPortfolio);
        break;
      
      case "web":
        setdata(webPortfolio);
        break;
        
      case "mobile":
        setdata(mobilePortfolio);
        break;
          
      case "design":
        setdata(designPortfolio);
        break;
        
      case "content":
        setdata(contantPortfolio);
        break;

      default:
        setdata(featuredPortfolio);
    }


  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map( (item) => (
            <PortfolioList title={item.title} 
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
          ))}
      </ul>
      

      <div className="container">
        {data.map(d=> (
          <div className="item">
          <img src={d.img} alt="" />
          <a href='https://github.com/MeenuKumari17' target='_blank'>{d.title}</a>
        </div>

        ))}
        
      </div>
    </div>
  )
}

export default Portfolio