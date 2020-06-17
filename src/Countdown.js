import React from 'react'

export const Countdown = (props) => {
    return (
    <div className='countdown'>
        <p>
        {props.name}
         <span>{props.countdown}</span>
       </p>
    </div>
      
    )
}