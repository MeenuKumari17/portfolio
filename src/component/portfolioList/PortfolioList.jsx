import React from 'react';
import './portfolioList.scss';

function PortfolioList({id, title, active, setSelected}) {
    
  return (
    <div className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)} >
        {title}
    </div>
  )
}

export default PortfolioList;