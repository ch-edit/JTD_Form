import { useState, useRef } from 'react';

import Intro from './Components/Intro';
import PersonalInfo from './Components/PersonalInfo';
import Address from './Components/Address';
import ThankYou from './Components/ThankYou';

function App() {
  const dataGuard_Script = useRef(null);

  //IAB ADVERTISEMENT SIZES
  const [adSizes, setSizes] = useState('mediumRectangle');

  const handleAdSizes = (dimensions) => {
    setSizes(dimensions);
  };

  //CONTROLLED INPUTS
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    postcode: '',
    address: '',
  });

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  //FORM STEPS
  const [step, setStep] = useState(0);

  const handleStepChange = (value) => {
    setStep(step + value);
  };

  //SUBMISSION
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStep(3);
  // };

  const formSteps = [
    <Intro
      adSizes={adSizes}
      handleStepChange={handleStepChange}
    />,
    <PersonalInfo
      step={step}
      {...inputs}
      adSizes={adSizes}
      handleInputs={handleInputs}
      handleStepChange={handleStepChange}
    />,
    <Address
      step={step}
      {...inputs}
      adSizes={adSizes}
      handleInputs={handleInputs}
      handleStepChange={handleStepChange}
    />,
    <ThankYou
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
          onClick={() => handleAdSizes('mediumRectangle')}>
          Medium Rectangle
          <br />
          (300x 250)
        </button>
        <button
          className='previous'
          onClick={() => handleAdSizes('leaderboard')}>
          Leaderboard
          <br />
          (728 x 90)
        </button>
        <button
          className='previous'
          onClick={() => handleAdSizes('skyscraper')}>
          Skyscraper
          <br />
          (160 x 600)
        </button>
      </div>
      <form
        // onSubmit={handleSubmit}
        className={`${adSizes} form_container`}>
        {formSteps[step]}
      </form>
    </div>
  );
}

export default App;
