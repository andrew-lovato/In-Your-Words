import React from 'react'

export const Input = (props) => {
    return (
        <li key={props.key} className={props.className}>
            <input onChange={props.onChange} value={props.value}  />
        </li>
    )
}