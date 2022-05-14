import React, { useState } from 'react';
import './contact.scss';

function Contact() {

  const [message, SetMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetMessage(true)
  }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Email' />
          <textarea placeholder='Your Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Message sent !!</span>}
        </form>
      </div>
      
    </div>
  )
}

export default Contact