import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import movies from './reducers'
import {createStore} from 'redux'

const store = createStore(movies);
//console.log('store',store);
//console.log('BEFORE STATE',store.getState());



//console.log('AFTER STATE',store.getState());


ReactDOM.render(<React.StrictMode><App store ={store}/></React.StrictMode>, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

