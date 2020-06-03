//import React from 'react';
import {combineReducers} from 'redux';
import postreducer from './postreducers';
import userreducer from './userReducer';
//const reducer =()=>{
  //  return <div>hii</div>;                                         reducer(state,action)
//}

export default combineReducers({
  posts:postreducer   ,
  user:userreducer                                                 //dummy:()=>10
});

//never mutate state ,if do react might return previous state at some time .thus no rerender(error)
     //eg: state.push() X

     //[...array,"hii"] append hii at end of array