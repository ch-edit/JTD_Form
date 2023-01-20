import React, { useEffect } from 'react';
import newWindowIcon from '../assets/icon_newWindow.png';

const Address = ({
  firstName,
  lastName,
  email,
  postcode,
  address,
  privacyPolicy,
  handleStepChange,
  handleInputs,
  adSizes,
}) => {
  useEffect(() => {
    const DG_config = {
      id: 'dg_widget',
      templateId: 'hqGAW5UsmUK',
      uniqueReference: `JtD_test-${email}`,
      channel: 'Ad Banner',
      campaign: 'JTD Demo',

      display: {
        applyDefaultStyle: false,
        location: 'inside',
        closeOnSubmit: false,
        displayCancelButtons: false,
        consentricLogo: false,
      },

      events: {
        onUpdate: (state) => {
          console.log('Current state:', state);
        },
        onSuccess: (response, submission) => {
          handleStepChange(1);
          console.log('Response body:', response);
          console.log('Submission sent to DataGuard:', submission);
        },
        onFailure: (error, submission) => {
          console.log('Error:', error);
          console.log('Submission sent to DataGuard:', submission);
        },
      },

      dataSharing: {
        partner: 'Join the Dots',
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          postcode: postcode,
          address: address,
        },
      },

      contactDetails: {
        verification: {
          email: email
        }
    }


    };

    const widget = (config) => {
      ExpressStatelessCapturePoint.load(config);
      console.table(config.dataSharing.data);
    };

    const dgScript = document.createElement('script');

    document.body.appendChild(dgScript);
    dgScript.addEventListener('load', widget(DG_config));

    return () => {
      document.body.removeChild(dgScript);
    };
  }, [address]);

  return (
    <div className='formStep_container flex_column' >
      <div className={`single_input_container address_input_container ${adSizes === 'mediumRectangle' ? 'flex_row' : 'flex_column'}`}>
        <label htmlFor='address'>Select Address:</label>
        <select
          name='address'
          id='address'
          value={address}
          onChange={handleInputs}>
          <option value='Address 1'>Address 1 {postcode && `for ${postcode}`}</option>
          <option value='Address 2'>Address 2 {postcode && `for ${postcode}`}</option>
          <option value='Address 3'>Address 3 {postcode && `for ${postcode}`}</option>
          <option value='Address 4'>Address 4 {postcode && `for ${postcode}`}</option>
          <option value='Address 5'>Address 5 {postcode && `for ${postcode}`}</option>
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
      {/* <div className='button_container flex_column'>
        <button
          className='previous'
          onClick={() => handleStepChange(-1)}>
          Previous
        </button>
        <button
          type='submit'
          className='next'>
          Submit Details
        </button>
      </div> */}
    </div>
  );
};

export default Address;
