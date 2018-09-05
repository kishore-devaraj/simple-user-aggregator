import React from 'react'
import './CustomButton.css'

const CustomButton = ({buttonText, handleSubmit, type = 'submit', fontSize = '1em',
  fontFamily = 'lato-regular', backgroundColor = '#7C49E2', height = '2.9em', margin = '2.6em 0 2.55em 0.5em'
}) => {
  let containerStyle = {
    width: '7em',
    height: height,
    margin: margin
  }
  let buttonStyle = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    backgroundColor: backgroundColor
  }

  return (
    <div className='custom-button-container' style={containerStyle}>
      <button className='custom-button' style={buttonStyle} type={type} onSubmit={handleSubmit}>{buttonText}</button>
    </div>
  )
}

export default CustomButton
