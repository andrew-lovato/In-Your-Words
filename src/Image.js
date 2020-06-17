import React from 'react';
import './index.css'

  export const Image = (props) => {
    return (
        <div className="flex-item-main">
          <img className='mainImage' src={props.src} /> 
        </div>
       )
  }