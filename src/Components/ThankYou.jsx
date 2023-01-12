import React from 'react';
import Logo from '../assets/logo_JtD.png';

const ThankYou = ({ firstName, adSizes }) => {
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
      <h2>Thank you {firstName && firstName} - We'll be in touch</h2>
    </div>
  );
};

export default ThankYou;
