import React from 'react';

const PersonalInfo = ({
  firstName,
  lastName,
  email,
  postcode,
  handleInputs,
  handleClick,
  adSizes,
}) => {
  return (
    <div
      className={`formStep_container ${
        adSizes === 'leaderboard' ? 'flex_row' : 'flex_column'
      }`}
    >
      <div>
        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='firstName'>
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

        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='lastName'>
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
      <div>
        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='email'>
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

        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='postcode'>
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
      <div
        className={`button_container ${
          adSizes === 'mediumRectangle' ? 'flex_row' : 'flex_column'
        }`}
      >
        <button className='previous' onClick={() => handleClick(-1)}>
          Previous
        </button>
        <button className='next' onClick={() => handleClick(1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
