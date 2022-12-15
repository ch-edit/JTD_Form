import { useState } from 'react';

import Intro from './Components/Intro';
import PersonalInfo from './Components/PersonalInfo';
import Address from './Components/Address';
import ThankYou from './Components/ThankYou';

function App() {
  //IAB adSizes

  const [adSizes, setSizes] = useState('mediumRectangle');

  const handleAdSizes = (dimensions) => {
    setSizes(dimensions);
  };

  //Inputs

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    postcode: '',
    address: '',
  });

  const handleInputs = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  //Form step

  const [step, setStep] = useState(0);

  const handleClick = (value) => {
    setStep(step + value);
  };

  //Submission

  const handleSubmit = () => {
    alert(JSON.stringify(inputs));
    handleClick();
    setStep(3);
  };

  const formSteps = [
    <Intro handleClick={handleClick} adSizes={adSizes} />,
    <PersonalInfo
      handleClick={handleClick}
      step={step}
      {...inputs}
      handleInputs={handleInputs}
      adSizes={adSizes}
    />,
    <Address
      handleClick={handleClick}
      step={step}
      postcode={inputs.postcode}
      address={inputs.address}
      handleInputs={handleInputs}
      adSizes={adSizes}
      handleSubmit={handleSubmit}
    />,
    <ThankYou
      handleClick={handleClick}
      step={step}
      firstName={inputs.firstName}
      adSizes={adSizes}
    />,
  ];

  return (
    <div>
      <h1>IAB standard ad sizes</h1>
      <div className='button_container'>
        <button
          className='previous'
          onClick={() => handleAdSizes('mediumRectangle')}
        >
          Medium Rectangle
          <br />
          (300x 250)
        </button>
        <button
          className='previous'
          onClick={() => handleAdSizes('leaderboard')}
        >
          Leaderboard
          <br />
          (728 x 90)
        </button>
        <button
          className='previous'
          onClick={() => handleAdSizes('skyscraper')}
        >
          Skyscraper
          <br />
          (160 x 600)
        </button>
      </div>
      <form className={`${adSizes} form_container`}>{formSteps[step]}</form>
    </div>
  );
}

export default App;
