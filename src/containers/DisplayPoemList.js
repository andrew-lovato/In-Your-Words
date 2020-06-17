    import React from 'react' 
    import { DisplayPoem } from '../DisplayPoem'
    import { images } from '../assets/images.js'

      
      export const DisplayPoemList = (props) => {
          return (
            <div className="flex-item-main">
                <div>
                    <h4>
                      <p className='thoughtsHeader'>My Notebook:</p>  
                    </h4>
                </div>
                <ol>
                    {props.thoughtsProp.map((thought, index)=> 
                        <DisplayPoem className='displayPoem' img={images[thought.image]} key={index} onClick={() => props.onClick(index)} name={props.name} value={thought.thought} />
                    )}
                </ol>
            </div> 
          )
      }  
      