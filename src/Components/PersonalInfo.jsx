import React from 'react';

const PersonalInfo = ({ firstName, lastName, email, postcode, handleInputs, handleStepChange, adSizes }) => {
  return (
    <div className='formStep_container flex_column'>
      <div className='double_input_container'>
        <div className='single_input_container'>
          <label
            className='label_personalInfo'
            htmlFor='firstName'
            aria-label='First Name'>
            First Name:
          </label>
          <input
            id='firstName'
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={handleInputs}
          />
        </div>
        
        <div className='single_input_container'>
          <label
            className='label_personalInfo'
            htmlFor='lastName'
            aria-label='Last Name'>
            Last Name:
          </label>
          <input
            id='lastName'
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={handleInputs}
          />
        </div>
      </div>

      <div className='double_input_container'>
        <div className='single_input_container'>
          <label
            className='label_personalInfo'
            htmlFor='email'
            aria-label='Aemail Address'>
            Email:
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={handleInputs}
          />
        </div>

        <div className='single_input_container'>
          <label
            className='label_personalInfo'
            htmlFor='postcode'
            aria-label='Postcode'>
            Postcode:
          </label>
          <input
            id='postcode'
            type='text'
            placeholder='Postcode'
            name='postcode'
            value={postcode}
            onChange={handleInputs}
          />
        </div>
      </div>
      <div className='button_container'>
        {/* <button
          className='previous'
          onClick={() => handleStepChange(-1)}>
          Previous
        </button> */}
        <button
          className='next'
          onClick={() => handleStepChange(1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
