import React from 'react'
import { Input } from '../Input.js'
import '../index.css';


export const Inputs = (props) => {
    return (
        <form className="flex-item-main form" onSubmit={props.onSubmit}>
        <div>
                    <h4>
                      <p className='inputsHeader'>Thoughts:</p>  
                    </h4>
                </div>
            <ol>
              {props.thoughtProp.map((input, index) => (
                <Input type='text' key={index} value={input} onChange={event => props.onChange(event, index)} className='textInputs' />
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

