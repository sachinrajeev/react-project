import React from 'react';
import './style.css';
class Searchbar extends React.Component{

    state={term:''};
                                                                    //onInputchange(event){
                                                                    // console.log(event.target.value.toUpperCase())}
    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.term)
        this.props.onEnter(this.state.term);       //error--'this' is undefined  solve by defining 'this' in constructor
                                                  // or by using ()=>  because it automatcally bind 'this' (onFormSubmit(event){)
    }                                                
    
                                                            
    
    render(){
        return (                                                      //or by onSubmit={event => this.onFormSubmit(event)}
            <div className="styl, ui segment">
                <form action="" method="get" className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="">
                      <label type="text" className="uin">image Search</label>
                      <input className="ui input" 
                      value={this.state.term} onChange={(e)=>this.setState({term :e.target.value})}/>
                    </div>
                </form>
            </div>                                                                       //no () above  controlled)
                          
        );              //or (uncontrolled) <input value="hkjhn" type="text" placeholder="Search" onChange={this.onInputchange}                                                 //onClick onChange onSubmit (input)
    }
} 
export default Searchbar;