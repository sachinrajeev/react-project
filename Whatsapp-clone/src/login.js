import React from 'react'
import './Login.css';
import {Button} from '@material-ui/core';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {

    const [{},dispatch]=useStateValue(); //it dispatch values where useStateValue is used

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error)=>alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login-container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" alt='there is an image'></img>
                <div className='login-text'>
                    <hi>Login with Google</hi>
                </div>
                <Button type='submit' onClick={signIn}>Login</Button>
            </div>
            
        </div>
    );
}

export default Login;
