import React,{useEffect,useState} from 'react';
import './sidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import {Link} from 'react-router-dom';

function SidebarChat( {id,name,addNewChat}) {  //{} -if not all have props
    const [seed,setSeed]=useState('');
    const [messages,setmessages]=useState('');

    useEffect(()=>{ 
        if (id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot)=>setmessages(snapshot.docs.map((doc)=>doc.data()))
            );//set messages map through all docs and get msgs back
        }
    },[id]);//for last message

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    const createChat=()=>{
        const roomName = prompt("please enter name");
        if(roomName){
           db.collection('rooms').add({
               name:roomName,
           });
            //database stuff
        }
    };


    return !addNewChat ?(      //if true 
        <Link to={`/rooms/${id}`}>
           <div className='sidebarChat'>
              <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
              <div className='sidebarChat_info'>
                    <h3>{name}</h3>
                    <p>{messages[0]?.message}</p>
              </div>
           </div>
         </Link>

    ):(
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add New Chat</h2>
        </div>
    );         //if false
}


export default SidebarChat;
