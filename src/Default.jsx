import React, { Component } from 'react'
import App from './App'
import './App.css';
class Default extends Component {


    render() {
        return (
            
        <html lang="en">
        <head>
            <title>React Calculator</title>
            <link type="stylesheet" href="./App.css" />
            <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"></link>
        </head>
        <body>
        <div>
            <App />
        </div> 
    
        </body>
        </html>
        )
    }
}

export default Default
