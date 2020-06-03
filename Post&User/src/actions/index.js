
import jsonplaceholder from '../apis/json_placeholder';
import _ from 'lodash';

export const fetch_post_and_users=()=>async (dispatch,getstate) =>{                         //2 arg is state
 await dispatch(Fetchpost());  //await wait for the reqst to complete
 
const userids=_.uniq(_.map(getstate().posts,'userId'));
userids.forEach(id => dispatch(Fetchuser(id)));                     //lodash

};
export const Fetchpost = () => async  dispatch =>{                     //same as { return async  dispatch =>{
                                                                       //to remove async await prblm
        const response =  await jsonplaceholder.get('/posts');           //dispatch,getstate
        dispatch({type:'FETCH_POST', payload:response.data})
};
export const Fetchuser= (id)=>async  dispatch=>{
                                                          //for avoiding duplicate request

   const response = await jsonplaceholder.get(`/users/${id}`);
  
   dispatch({type:'FETCH_USER', payload:response.data}) 
  };
  
    //memoize 

 // export const Fetchuser= (id)=>  dispatch=>{
 //   _fetchuser_memoize(id,dispatch);  } 
                                                        //for avoiding duplicate request
//const _fetchuser_memoize = _.memoize(async(id,dispatch)=>{  //using memoize user cannot be re fetched if needed
//const response = await jsonplaceholder.get(`/users/${id}`);

//dispatch({type:'FETCH_USER', payload:response.data});



//can use promise instead of async but the response is delayed.all others work fast thus error 

    //   const response = await jsonplaceholder.get('/posts') 
    
    //   return {
     //      type:"FETCHED",
     //      payload:response            //action should only have plain js .but async await does not form pojo
   // };
                                          //at first render it return request from json because of async await(error)


 //async synchronous 
  //thunk asynchronous