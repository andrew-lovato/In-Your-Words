import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let timer = null

class Header extends React.Component {
  constructor() {
    super();
      this.state = {
        ranNum: null,
        isStart: true,
        timer: null,
        value: [],
        values: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubClick = this.handleSubClick.bind(this);
  }

  handleChange(i, event) {
    event.preventDefault();

    const newValues = [...this.state.values];
    newValues[i]    = event.target.value;

    this.setState({ values: newValues })

    // this.setState({value: event.target.value})
    // const thoughtsArr = []
    // thoughtsArr.push(this.state.value)
    // console.log(thoughtsArr)
    // return thoughtsArr
  }


  

  displayPoem = (poem) => {
  
  }

  // savePoem = () => {
  //   let poemArr = [];
  //   const input = this.state.value;
  //   input.forEach(element => {
  //       poemArr.push(element);
  //   })
  //   // console.log(poemArr)
  //   return poemArr; 
  // }

handleClick() {
  clearTimeout(timer);
  this.clearForm();
  const ranNum = this.generateRanNum();
  this.generateInputs();
  this.changeToRestartText()

  this.countdownClock(ranNum);
}

handleSubClick() {
  this.handleSubmit()
  alert(this.state.values)
//  const poem = this.savePoem();
//  this.displayPoem(poem)
}

generateRanNum = () => {
  let ranNum = Math.floor(Math.random() * 20);
    this.setState({
      ranNum: ranNum,
    })
    return ranNum
}
    
changeToRestartText = () => {
  this.setState({isStart: false})
}

clearForm = () => {
  if(this.state.restart === true){
    const inputLi = <Input />;
    inputLi.map(element => {
        return element.remove()
    });
    const subButton = <SubmitButton />
    subButton.remove()
  }
}

countdownClock = async (ranNum) => {
const startingNum = ranNum * 20;
for(let i = startingNum; i >= 0; i--) {
    await new Promise(resolve => {
        timer = setTimeout(() => {
         this.setState({
           timer: i
         })
        resolve()
     }, 1000)
   });
  }
}


generateInputs = () => {
    const inputs = []
    for(let i = 1; i <= this.state.ranNum; i++){
      inputs.push(
        <Input type='text' onChange={(event) => { this.handleChange(i, event); }}  className='textInputs' />
      )
    }
    return inputs;
  }

  handleSubmit(event) {
    // event.preventDefault();
    const thought = this.state.values;
     return (
        <DisplayPoem onDeleteClick="this.handleDeleteClick" name='Delete Thoughts' value={thought} />
        )
  }
  // onChange={(event) => {this.handleChange(i, event);}}

generateSubmitButton = () => {
  if(this.state.isStart === false) {
    return (
      <SubmitButton type='submit' value='Submit'  name='Submit Button' />
    )
  }
 
}

// onClick={this.handleSubmit()}

handleDeleteClick = () => {
   const displayPoem = <DisplayPoem />
   displayPoem.remove()
}



  render() {
    return (
      <div>
        <header>
          <div className="headerContainer">
              <div id="countdown">
                <Countdown name='Countdown: ' countdown={this.state.timer} />
              </div>
              <div className="flex-item-header">
                <StartButton 
                    name={this.state.isStart ? 'Start Game' : 'Restart Game'}
                    onClick={() => this.handleClick()}
                />            
                </div>
              <div>
                  <DisplayCount name='Word Count: ' count={this.state.ranNum} />
              </div>
          </div>
        </header>
        <section>
          <div>
            <ol>
              {this.handleSubmit()}
            </ol>

          </div>
          <div className="flex-main-item"> 
            <ul>
              {this.generateInputs()}
            </ul>
            {this.generateSubmitButton()}
          </div>
        </section>
      </div>
    )
  }
}

class DisplayPoem extends React.Component {
  render(){
    return (
      <li>
        <span>{this.props.value}</span>
        <button onCLick={this.props.onClick}>{this.props.name}</button>
      </li>
    )
  }
}

class StartButton extends React.Component {
  render(props) {
      return (
        <button onClick={this.props.onClick}>{this.props.name}</button>
      )
    }
  }

class SubmitButton extends React.Component {
  render() {
    return (
      <button  type={this.props.type} onClick={this.props.onClick} value={this.props.value} >
        {this.props.name}
      </button>
    )
  }
}

class DisplayCount extends React.Component {

  render() {
    return (
      <p>
        {this.props.name}
        <span>{this.props.count}</span>
      </p>
    )
  }
}

class Countdown extends React.Component {
  render(props) {
    return (
      <p>
        {this.props.name}
        <span>{this.props.countdown}</span>
      </p>
    )
  }
}

class Saved extends React.Component {
  render() {
    return (
      <div className="flex-main-item">
        <ol >

        </ol>
      </div>
    )
  }
}

class Image extends React.Component {
  render(){
    return (
      <div className="flex-main-item">
        <img className="mainImage" src='https://uploads3.wikiart.org/images/wladyslaw-strzeminski/cover-for-a-book-by-julian-przybo-z-ponad-1930.jpg!Large.jpg'/> 
      </div>
     )
  }
}

class Input extends React.Component {
  render(props) {
    return (
      <li className={this.props.className}>
          <input value={this.props.value} onChange={this.props.onChange} type={this.props.type}  />
        </li>
    )
  }
}

class Game extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Saved />
        <Image />
      </div>
    )
  }
}

ReactDOM.render(

    <Game />
    
,
  document.getElementById('root')
);

