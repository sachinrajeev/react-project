import React from 'react';
import {connect } from 'react-redux';
import {Fetchpost, fetch_post_and_users} from '../actions';
import UserHeader from './user_header';

class Postlist extends React.Component{
    componentDidMount(){
        this.props.fetch_post_and_users();
    }
    Renderlist(){
      return this.props.post.map((post)=>{            //for every post return 
         return (
           <div className="item" key={post.id}>
             <i className="large middle aligned icon user"></i>
             <div className="content">
               <div className="description">
                 <h2>{post.title}</h2>
                 <p>{post.body}</p>
               </div>
               <UserHeader userID={post.userId}/>
             </div>
           </div>
         );
      });
    }

    render(){
      console.log(this.props.post);
      console.log(this.props);
    return <div className="ui relaxed divided list">{this.Renderlist()}</div>;
    };
}

const mapStateToPrps=(state)=>{
  console.log(state);
  return {post:state.posts};

}
export default connect(mapStateToPrps,{fetch_post_and_users})(Postlist);
                              //send to dispatch fn automat  by connect then to reducers

 //connect(null,{fetchpost})...   null-first time reducers are called by redux undefined is initialised ,soo give null  
                                    //second time reducer called it return previous value