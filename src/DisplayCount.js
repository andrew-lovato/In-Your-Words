import React from 'react'


export const DisplayCount = (props) => {
    return (
        <div className='displayCount'>
            <p >
            {props.name}
            <span>{props.count}</span>
             </p>
        </div>
       
    )
}