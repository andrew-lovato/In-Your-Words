import React from 'react'

export class DisplayPoem extends React.Component {
    render(){
      return (
        <div>
            <li className='displayPoem'>
          <div>
            <span>{this.props.value}</span>
            <button className='deletePoemButton' onClick={this.props.onClick}>{this.props.name}</button>
            <img className='poemImage' src={this.props.img} alt=""/>

          </div>


        </li>

        </div>
      
      )
    }
  }