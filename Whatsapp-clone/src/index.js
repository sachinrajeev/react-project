import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import * as serviceWorker from "./serviceWorker";
import reducer,{initialState} from './Reducer';
import {StateProvider} from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState}
    reducer={reducer}>
        <App />
      </StateProvider>
  </React.StrictMode>,
  
  document.getElementById('root')
);

//installed--firebase,react-router-dom,redux,

//if app is needed offline -change unregister to register
//serviceWorker.unregister();