import './assets/font.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Image } from './Image.js'
import { Button } from './Button.js'
// import { images } from './assets/images.js'
import { Countdown } from './Countdown.js'
import { DisplayCount } from './DisplayCount.js'
import { Input } from './Input.js'
import { Title } from './Title.js'
import { DisplayPoemList } from './containers/DisplayPoemList.js'
import { Directions } from './Directions.js'
import api from './api/api.js'
// import { Inputs } from './containers/Inputs.js'

class Game extends React.Component{
  constructor(props){
    super(props)
   
    this.timer = null

    this.state = {
      images: [],
      currentImg: 0,
      timer: null,
      ranNum: null,
      thoughts: [],
      newThought: [],
      thought: [],
      isSubmitted: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  componentDidMount = async () => {
    await api.getAllImages().then(images => {
      let newArr = []
      images.data.data.forEach(imageObj => {
       newArr.push(imageObj.images) 
      })
      this.handleGetAllThoughts()

      this.setState({
        images: newArr,
      })
    })
  }



  handleInsertThought = async () => {
    const { newThought, currentImg } = this.state
    const payload = { newThought, currentImg}

    await api.insertThought(payload).then(res => {
      console.log(payload)
      this.setState({
        newThought: []
      })
    }) 
  }

  handleGetAllThoughts = async () => {
    await api.getAllThoughts().then(thoughts => {
      let newThoughtArr = []
      thoughts.data.data.forEach(thoughtObj => {
        newThoughtArr.unshift(thoughtObj)
      })
   console.log(newThoughtArr)
      this.setState({
        thoughts: newThoughtArr,
      })
    })
  }


modifiedRanNum = (newRanNum) => {
  if(newRanNum < 5) return newRanNum * 70
  if(newRanNum < 10) return newRanNum * 50
  if(newRanNum > 10) return newRanNum * 30
}

countdownClock = async (newRanNum) => {
  const startingNum = this.modifiedRanNum(newRanNum)
// const startingNum = newRanNum * 30;
for(let i = startingNum; i >= 0; i--) {
    await new Promise(resolve => {
        this.timer = setTimeout(() => {
         this.setState({
           timer: i
         })
         this.ifTimeRunsOut();
        resolve()
     }, 1000)
   });
  }
}

handleChange(event, index) {
  console.log(event)
  const inputs = [...this.state.thought];
  inputs[index] = event.target.value

  let rawThought = inputs
  let cleanThought = rawThought.map(word => word.trim()).filter(word => word.length > 0)
  let thought = cleanThought.map((word, i) => {
    if(i === cleanThought.length - 1){
      return word.trim()
    } else {
      return word.trim() + ',' + ' ';
    }
  });

  this.setState({
    newThought: thought,
    thought: inputs
  });
}

  handleClick(){
    clearTimeout(this.timer)
    let newRanNum = this.genRanNum()
    this.countdownClock(newRanNum)
    this.generateStateInputs(newRanNum)
    let current = this.state.currentImg;
    let next = ++current % this.state.images.length;
    this.ifTimeRunsOut()
    this.setState({
      currentImg: next,
      ranNum: newRanNum
    })
  }

  genRanNum(){
    let rNum = Math.floor(Math.random() * 20);
   if(rNum === 0) return 20
     return rNum
  }

  generateStateInputs(newRanNum){
    let inputArray = []
    for(let i = 0; i < newRanNum; i++){
      inputArray.push('')
    }
    return this.setState({
      thought: inputArray
    });
  }

    async ifTimeRunsOut(){
      if(this.state.timer === 0) {
          clearTimeout(this.timer)
          await this.handleInsertThought()
          this.handleGetAllThoughts()
          this.setState({
            thought: [],
            ranNum: null,
            timer: null
        })
    }
  }

  async handleSubmit(event) {
     if(event){
      clearTimeout(this.timer)
      event.preventDefault();
      await this.handleInsertThought()
      this.handleGetAllThoughts()
      this.setState({
        thought: [],
        ranNum: null,
        timer: null
      })
  }
}

  handleDeleteClick(index){
    let remThought = this.state.thoughts.filter(thought => thought !== this.state.thoughts[index])
    return this.setState({
      thoughts: remThought
    })  
  }

  render(){
    let src = this.state.currentImg;
    let hasInputs = this.state.thought.length
    return (
      <div>
        <div className="mainContainer">
        <DisplayPoemList thoughtsProp={this.state.thoughts} onClick={this.handleDeleteClick} name='Erase Thought' /> 
        <Image className="flex-item-main" className='mainImage' src={this.state.images[src]} />
        {/* <Inputs hasInputs={hasInputs} onSubmit={this.handleSubmit} thoughtProp={this.state.thought} onChange={event => { this.handleChange(event) }} /> */}
       
        <form className="flex-item-main form" onSubmit={this.handleSubmit}>
        <div>
                    <h4>
                      <p className='inputsHeader'>Thoughts:</p>  
                    </h4>
                </div>
            <ol>
              {this.state.thought.map((input, index) => (
                <Input type='text' key={index} value={input} onChange={event => { this.handleChange(event, index) }} className='textInputs' />
              ))}
              { hasInputs ? (
                <input className='submitThoughts' type='submit' value='Submit Thought!' />
              ) : (
                null
              )}
            </ol>
          </form>
       </div>
        <div className='headerContainer'>
          <Title />
          <Countdown name={'Countdown: '} countdown={this.state.timer} />
          <Button onClick={this.handleClick} name='Generate Inputs' />
          <DisplayCount name='Word Count: ' count={this.state.ranNum} />
          <Directions />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
document.getElementById('root')
);

