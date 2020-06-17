import React from 'react'
import { Input } from '../Input.js'

export const Inputs = (props) => {
    return (
    <form className="flex-item-main form" onSubmit={props.onSubmit}>
        <ol>
            {props.thoughtProp.map((input, index) => (
            <Input type='text' onSubmit={props.onSubmit} key={index} value={input} onChange={props.onChange} className='textInputs' />
            ))}
            { props.hasInputs ? (
            <input className='submitThoughts' type='submit' value='Submit Thought!' />
            ) : (
            null
            )}
        </ol>
    </form>
    )
}

{/* <Inputs hasInputs={hasInputs} onSubmit={this.handleSubmit} thoughtProp={this.state.thought} onChange={this.handleChange} /> */}

