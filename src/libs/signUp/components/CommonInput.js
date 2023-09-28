import React from 'react';
import '.././style/commonInput.css';

const CommonInput = (props) => {
  return (
    <div className='inputContainer'>
      <label className={`label ${props.labelStyle}`} htmlFor={props.inputId}>{props.label}</label><br/>
      <input 
        className={`accountInput ${props.inputStyle}`}
        placeholder={props.placeholder}
        id={props.inputId}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default CommonInput;