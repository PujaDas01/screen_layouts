import '../style/commonButton.css';

const CommonButton = (props) => {
  return (
    <div className='buttonContainer'>
        <button style={props.buttonStyle} className='customButton' onClick={props.onClick}>{props.buttonText}</button>
    </div>
  )
}

export default CommonButton;