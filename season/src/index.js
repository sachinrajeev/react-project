

//state     dynamic component     inbuild funtions    methods()=>


import React from 'react';
import ReactDOM from 'react-dom';
import Seasondetails from './seasondetail';
import Spinner from './spinner';

class App extends React.Component{
   
   // constructor(props) {
    //    super(props);
    //    this.state= {lat: null, errormsg:''}; }               //only direct assignment initial  !!!!!!!  always use setstate()

    state={lat:null, errormsg:''}; //same as constuctor in babel

    componentDidMount()                               //once component is displayed
    {
        console.log('my component');
        window.navigator.geolocation.getCurrentPosition(
            (positionsuccess)=>this.setState({lat:positionsuccess.coords.latitude}),                                                         //console.log(positionsuccess)
            (error)=> this.setState({errormsg:error.message})
            
        );                         //positionsuccess object (call back:only after location is obtained)
    }
    componentDidUpdate(){
        console.log('component update');               //every update  (render)
    }

     Rendercomponent(){                               //method in react 
      
      if(this.state.errormsg && !this.state.lat){
        return(
        <div>{this.state.errormsg}</div>
        );
      }
    else if(!this.state.errormsg && this.state.lat){
        return(
          <Seasondetails latit={this.state.lat}/>
        );
      }
     
      return(
          <Spinner message="Please accept the request"/>
        );
       
  }
  
    render(){     //rerender after a change   updated state
        
    //return (   
      //  <div> lattitude :{this.state.lat}
      //  <br></br> 
      //  {this.state.errormsg} </div>
      //);
      return(                                                   //in render single return 
        <div className="border red">
          {this.Rendercomponent()}
        </div>
      );
     }
    }

ReactDOM.render(<App />,document.getElementById('root'));