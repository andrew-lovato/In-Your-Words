import React from 'react';

export const Button = (props) => {
return <button className='genInputBut' onClick={props.onClick}> {props.name}</button>
}