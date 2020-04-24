import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers :{ Authorization:'Client-ID IJDSm7gfIMTeehXmdh_x2ko_5w29hDq13W416lxZfb0'   }

});

//onSearchSubmit = async (term)=>{         //this error,so arrow fn    //get() is with unsplash    axios or fetch can be used
                                                       // 2 args- url and access key
//const response= await axios.get(
//'https://api.unsplash.com/search/photos',{
//params:{query:term},
//headers :{ Authorization:'Client-ID IJDSm7gfIMTeehXmdh_x2ko_5w29hDq13W416lxZfb0'   }
//} )

//this.setState({image:response.data.results}); 



//for info about response from unsplash
// .then((response)=>{
//   console.log(response.data.results) ;   }
//  );

//OR use async and await 
//console.log(response)  gives more info
 //promise ojct returns when axios is requested
//.then() is called  and will have response of unsplash 


