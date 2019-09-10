import React, { Component } from 'react'
import './App.css';
class Buttons extends Component {


    render() {
        return (
                
        <div className="btn-layout">
          <button className="buttons" value="1" onClick={event => this.props.onClick(event.target.value)}> 1</button>
          <button className="buttons" value="2" onClick={event => this.props.onClick(event.target.value)}> 2</button>
          <button className="buttons" value="3" onClick={event => this.props.onClick(event.target.value)}> 3</button>
          <button className="buttons" value="4" onClick={event => this.props.onClick(event.target.value)}> 4</button>
          <button className="buttons" value="5" onClick={event => this.props.onClick(event.target.value)}> 5</button>
          <button className="buttons" value="6" onClick={event => this.props.onClick(event.target.value)}> 6</button>
          <button className="buttons" value="7" onClick={event => this.props.onClick(event.target.value)}> 7</button>
          <button className="buttons" value="8" onClick={event => this.props.onClick(event.target.value)}> 8</button>
          <button className="buttons" value="9" onClick={event => this.props.onClick(event.target.value)}> 9</button>
          <button className="buttons" value="0" onClick={event => this.props.onClick(event.target.value)}> 0</button>
          
          <button className="buttons" value="+" onClick={event => this.props.onClick(event.target.value)}> +</button>
          <button className="buttons" value="-" onClick={event => this.props.onClick(event.target.value)}> -</button>
          <button className="buttons" value="*" onClick={event => this.props.onClick(event.target.value)}> x</button>
          <button className="buttons" value="/" onClick={event => this.props.onClick(event.target.value)}> ÷</button>
          <button className="buttons" value="=" onClick={event => this.props.onClick(event.target.value)}> =</button>
          <button className="clearbtn" value="clear" onClick={event => this.props.onClick(event.target.value)}> CLEAR</button>
          
        </div>
        );
    }
}

export default Buttons
