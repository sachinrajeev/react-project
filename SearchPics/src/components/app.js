import React from 'react';
import Searchbar from './searchbar';
//import  axios from "axios";
import unsplash from '../unsplash__';
import Imageresult from './imageresult';


class App extends React.Component{
    state = {image: [] };

    onSearchSubmit = async (term)=>{         //this error,so arrow fn    //get() is with unsplash    axios or fetch can be used
                                                                    // 2 args- url and access key
       const response= await unsplash.get(
             'https://api.unsplash.com/search/photos',{
              params:{query:term}});
              
                //for info about response from unsplash
               // .then((response)=>{
              //   console.log(response.data.results) ;   }
              //  );     
              //OR use async and await 
                                                         //console.log(response)  gives more info
               this.setState({image:response.data.results});  
               console.log(this.state.image);                                             //promise ojct returns when axios is requested
                                                            //.then() is called  and will have response of unsplash 

        
    }

    render(){
    return (
        <div className="ui container" style={{marginTop:"15px"}}>
        <Searchbar onEnter={this.onSearchSubmit} /> 
         <Imageresult images={this.state.image}/>        
        </div>                                           //pass onEnter to searchbar  and from searchbar to onSearchSubmit
    );                                                   // found:{this.state.image.length} images 
};
}
export default App;
