import React, { Component,useState } from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './login';
import { useStateValue } from './StateProvider';
//class App extends Component {
function App(){

  const [{ user },dispatch]=useStateValue();
  
  //render() {
    return (
      <div className='app'>
         {!user ?(
         <h1><Login/></h1>
         ):(
          <div className='app-body'>
          <Router>
            
              <Sidebar/>
              <Switch>
              <Route path='/rooms/:roomId'>
                 
                 <Chat/>
              </Route>
              <Route path='/'>
                <Chat/>

              </Route>
            </Switch>
          </Router>
        </div>
         )
         }
          
      </div>
    );
  };
//}

export default App;
