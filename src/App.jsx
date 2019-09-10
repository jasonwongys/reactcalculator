import React from 'react';

import './App.css';
//import { EventEmitter } from 'events';
import Display from './Display';
import Buttons from './Buttons';

// App will be responsible to get user input and pass to child component display to calculate answer
//Click on one button and display the number

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      result: ""
    }

    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  calculate =() => {
    this.setState({
      result: (eval(this.state.result) || "") + ""
    })
  }

  reset = () => {
    this.setState({
      result: ""
    })
  }

  handleClick = button => {
    if(button === "="){

      this.calculate()

    } else if (button === "clear") {

      this.reset()
    }    
    
    else {
    this.setState({
      result: this.state.result + button
    })
  }
}
  render() {
    return (
      <div className="container">
        <h1>React Calculator</h1>
          
            <Display result={this.state.result}/>
            <Buttons onClick={this.handleClick} />
          
      </div>
      

    )
    
  }
}



export default App;
