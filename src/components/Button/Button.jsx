import React from 'react'
import './Button.css'

const Button = ({ text, className }) => {
  return (
    <button className={`custom-button ${className}`} >
      {text}
    </button>
  )
};

export default Button;