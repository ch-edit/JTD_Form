import React, { useEffect } from 'react';
import newWindowIcon from '../assets/icon_newWindow.png';

const Address = ({
  postcode,
  address,
  privacyPolicy,
  handleClick,
  handleInputs,
  adSizes,
  handleSubmit,
}) => {
  useEffect(() => {
    const dgScript = document.createElement('script');
    dgScript.textContent = `StatelessWidget.load({
      id: 'dg_widget',
      templateId: 'hqGAW5UsmUK',
      uniqueReference: 'jTD_test',
      channel: 'ad banner',
      campaign: 'JTD TEST',

      display: {
        applyDefaultStyle: false,
        location: 'inside',
        displayButtons: false,
        consentricLogo: false,
      },
      events: {
        onSuccess: (response, submission) => {
          console.log('Response body:', response);
          console.log('Submission sent to DataGuard:', submission);
        },
        onFailure: (error, submission) => {
          console.log('Error:', error);
          console.log('Submission sent to DataGuard:', submission);
        }
      },

    })`;
    document.body.appendChild(dgScript);
    return () => {
      document.body.removeChild(dgScript);
    };
  }, []);

  return (
    <div
      className={`formStep_container ${
        adSizes === 'leaderboard' ? 'flex_row' : 'flex_column'
      }`}
    >
      <div
        className={`input_container ${
          adSizes === 'mediumRectangle' ? 'flex_row' : 'flex_column'
        }`}
      >
        <label htmlFor='address'>Select Address:</label>
        <select
          name='address'
          id='address'
          value={address}
          onChange={handleInputs}
        >
          <option value='Address 1'>
            Address 1 {postcode && `for ${postcode}`}
          </option>
          <option value='Address 2'>
            Address 2 {postcode && `for ${postcode}`}
          </option>
          <option value='Address 3'>
            Address 3 {postcode && `for ${postcode}`}
          </option>
          <option value='Address 4'>
            Address 4 {postcode && `for ${postcode}`}
          </option>
          <option value='Address 5'>
            Address 5 {postcode && `for ${postcode}`}
          </option>
        </select>
      </div>
      {/* <div className='privacy_container'>
        <div className='input_container'>
          <label className='privacy_policy' htmlFor='privacyPolicy'>
            Yes, please send me information via email
            <input
              id='privacyPolicy'
              type='checkbox'
              name='privacyPolicy'
              value={privacyPolicy}
            />
          </label>
        </div>
        <p>
          By ticking 'Yes' your data will by processed in line with our{' '}
          <a
            className='privacyPolicy_link'
            href='https://wejointhedots.co.uk/privacy-policy'
            target='_blank'
          >
            Privacy Policy <img src={newWindowIcon} style={{ width: '12px' }} />
          </a>
        </p>
      </div> */}
      <div id='dg_widget'></div>
      <div
        className={`button_container ${
          adSizes === 'mediumRectangle' ? 'flex_row' : 'flex_column'
        }`}
      >
        <button className='previous' onClick={() => handleClick(-1)}>
          Previous
        </button>
        <button type='submit' className='next' onClick={handleSubmit}>
          Submit Details
        </button>
      </div>
    </div>
  );
};

export default Address;
