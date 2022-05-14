import React from 'react';
import './topbar.scss';
// import PersonIcon from '@mui/icons-material/Person';s
import { Mail, Person } from '@material-ui/icons';

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>protfolio.</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+44 666 888</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>meenu@gmail.com</span>
          </div>
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar