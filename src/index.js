import React from 'react';
import ReactDOM from 'react-dom';
//import '../public/index.css';
import Default from './Default';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Default />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
