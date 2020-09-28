import React,{useState,useEffect} from 'react';
import './Sidebar.css'; 
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined, RoomService} from '@material-ui/icons';
import SidebarChat from './sidebarChat';
import db from './firebase';
import {useStateValue} from './StateProvider';
function Sidebar(){
    const [room,setroom]= useState([]);
    const [{user},dispatch]=useStateValue();

    useEffect(() => {
        const unsubscribe= db.collection('rooms').onSnapshot((snapshot)=>//returns ...
            setroom(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        ));
        return()=>{
            unsubscribe();
        }
        
    }, []);
 
    
    return ( 
        
        <div className='sidebar'>
            <div className='sidebar-header'>
                <Avatar src={user?.photoURL}/>
                <div className='sidebar-header-right'>
                  <IconButton> 
                         <DonutLargeIcon/>
                  </IconButton> 
                  <IconButton>
                        <ChatIcon/>
                  </IconButton> 
                  <IconButton>
                        <MoreVertIcon/>
                  </IconButton> 
                </div>

            </div>
            <div className='sidebar-search'>
                <div className='sidebar-search-container'>
                    <SearchOutlined/>
                 <input placeholder='Search Chats' type='text'></input>
                </div>
                

            </div>
            <div className='sidebar-chats'>
                <SidebarChat addNewChat/>
                {room.map(room=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
            

        </div>
        
    );
    console.log(room);
}
export default Sidebar;