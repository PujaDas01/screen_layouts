import React from 'react';
import '../style/signUp.css';
import SideLink from '../components/SideLink';
import CommonInput from '../components/CommonInput';
import CommonButton from '../components/CommonButton';

const SignUp = () => {
  return (
    <div className='signUp'>
        <div className='sideLinkContainer'>
          <SideLink />
        </div>
        <div className='createAccountContainer'>
          <div className='accountContent'>
            <h3>Create your account</h3>
          </div>
          <CommonInput
            type='text'
            inputId='email'
            label='Email'
            placeholder='Enter your email address'
          />
          <CommonInput
            type='text'
            inputId='fullName'
            label='Full name'
            placeholder='Enter your full name'
          />
          <CommonInput
            type='password'
            inputId='password'
            label='Password'
            placeholder='Type to create a password'
          />
          {/* <CommonInput
            labelStyle='labelStyle'
            inputStyle='inputStyle'
            type='checkbox'
            label='Get updates and notifications about our product.'
          /> */}
          <CommonButton
            buttonText='Type to create a password'
          />
        </div>
    </div>
  )
}

export default SignUp;