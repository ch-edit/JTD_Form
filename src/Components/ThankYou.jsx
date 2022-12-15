import React from 'react';
import Logo from '../assets/logo_JtD.png';

const ThankYou = ({ firstName, handleClick, adSizes }) => {
  return (
    <div
      className={`formStep_container ${
        adSizes === 'leaderboard' ? 'flex_row' : 'flex_column'
      }`}
    >
      <a href='https://wejointhedots.co.uk/' target='_blank'>
        <img src={Logo} className='logo' alt='Join the Dots logo' />
      </a>
      <h2>Thank you {firstName && firstName} - We'll be in touch</h2>
      <div className='button_container'>
        <button className='previous' onClick={() => handleClick(-1)}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
