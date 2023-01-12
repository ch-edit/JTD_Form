import React from 'react';
import Logo from '../assets/logo_JtD.png';

const Intro = ({ handleStepChange, adSizes }) => {
  return (
    <div className='formStep_container flex_column'>
      <a
        href='https://wejointhedots.co.uk/'
        target='_blank'>
        <img
          src={Logo}
          className='logo'
          alt='Join the Dots logo'
        />
      </a>
      <h2>Let’s make your media unstoppable. Request our brochure today…</h2>
      <div>
        <button
          className='next'
          onClick={() => handleStepChange(1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Intro;
