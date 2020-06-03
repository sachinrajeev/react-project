import React from 'react';
import {connect} from 'react-redux';
import {Fetchuser} from '../actions';
class UserHeader extends React.Component{
    componentDidMount(){
      //  this.props.Fetchuser(this.props.userID); //return 
    }
    render(){
      //  const user = this.props.users.find((user)=>user.id===this.props.userID);  //find from user where user.id= userid
      const {user} =this.props 
      if(!user){
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}
const mapstateprops_user=(state,ownProps)=>{
    
    return { user:state.user.find(user=>user.id===ownProps.userID)};
    //line 9 to pass single elem through props  //ownProps have copy of props from compoenntdidmount
}
export default connect(mapstateprops_user,{Fetchuser})(UserHeader);

// const user = this.props.users.find((user)=>user.id===this.props.userID);   ??