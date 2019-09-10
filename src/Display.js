import React from 'react';
import './App.css';

class Display extends React.Component {
    render() {
        let {result} = this.props;
    return (
        <div className="answer">
        <h1>{result}</h1>
        </div>
    )
    }
}

export default Display