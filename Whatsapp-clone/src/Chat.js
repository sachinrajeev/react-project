import React,{useState,useEffect} from 'react'
import './Chat.css';

import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, SettingsInputAntenna } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';



function Chat() {
    const [state, setstate] = useState('');
    const [Input,setInput] =useState('');
    const {roomId} = useParams();//????????
    const [roomName,setRoomName]=useState('');
    const [messages,setmessages]=useState([]);
    const [{user},dispatch ]=useStateValue();//get data from data layer

    useEffect(()=>{
        if (roomId)
        {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) =>
                setRoomName(snapshot.data().name) //2 hrs:28 mins
            );
            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp','asc')
            .onSnapshot(snapshot=>setmessages(snapshot.docs.map((doc)=>doc.data())));
        }

    },[roomId]);

    useEffect(() => {
        setstate(Math.floor(Math.random()*5000));
    },[roomId]); // dependancies (here non -so execute once)

    const sendMessage =(e)=>{
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            message:Input,
            name:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
    setInput('');
    }
    
    return (
        <div className='chat'>
            <div className='chat-header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${state}.svg`} />

                <div className='chat-header-info'>
                    <h3>{roomName}</h3>
                    <p>last seen{" "}{new Date(
                        messages[messages.length-1]?.timestamp?.toDate()
                        ).toUTCString()}
                    </p>
                </div>
                <div className='chat-header-right'>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton> 
                    <IconButton>
                        <MoreVert/>
                    </IconButton> 
                </div>
            </div>

            <div className='chat-body'>
                {messages.map(message=>(
                    <p className={`chat-message ${message.name===user.displayName && "chat-reciever"}`}>
                    <span className='chat-name'> {message.name}{console.log(message.name)}</span>
                    {message.message}
                    <spam className='time-stamp'>
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </spam>
                </p>
                )
                )}
                
            </div>
            <div className='chat-footer'>
                <InsertEmoticon/>
                <form>
                    <input type='text' placeholder='Type a message' value={Input} onChange={(e)=>setInput(e.target.value)}></input>
                    <button  type='submit' onClick={sendMessage}>send</button>
                </form>
                <MicIcon/>

            </div>
        </div>
    )
}

export default Chat;
