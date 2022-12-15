import React from 'react';
import Logo from '../assets/logo_JtD.png';

const Intro = ({ handleClick, adSizes }) => {
  return (
    <div
      className={`formStep_container ${
        adSizes === 'leaderboard' ? 'flex_row' : 'flex_column'
      }`}
    >
      <a href='https://wejointhedots.co.uk/' target='_blank'>
        <img src={Logo} className='logo' alt='Join the Dots logo' />
      </a>
      <h2>Let’s make your media unstoppable. Request our brochure today…</h2>
      <div>
        <button className='next' onClick={() => handleClick(1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Intro;
