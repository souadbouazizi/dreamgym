import React from 'react';
import './PurpleBtn.css'


function PurbleBtn(props) {
  return (
    <a href='./' className='Purple-btn border-0 text-capitalize'>{props.btnTitle}</a>
  )
}

export default PurbleBtn;