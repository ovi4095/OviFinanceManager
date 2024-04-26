import * as actionTypes from './actionTypes';
import { navigate } from '../NavigationRoot';
import axios from 'axios';


export const authUser = userData => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        payload: userData
    }
}

export const tryAuth = (email, password, mode) => dispatch => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
};
    let url = '';   
    const API_KEY = "AIzaSyDAbKH96Hi16yOAeLIGue7ilBgq9Q3F_pE"
    if(mode === 'signup') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;
    } else if (mode === 'login') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ API_KEY;
    }

    axios.post(url,authData)
    .then(res => res.data)
    .then(data => {
        
        if(data.error) {    
            alert(data.error);
        }else {
            dispatch(authUser({token: data.idToken, userId: data.localId}));
            navigate('Home');
        }
        console.log("response",data)
    })
    .catch(err => {
        console.log('s',err.response.data.error.message);
        if(err.response.data.error.message==="INVALID_LOGIN_CREDENTIALS"){
            alert("Email or Password is incorrect!")
        } else if(err.response.data.error.message==='EMAIL_EXISTS'){
            alert("Email is Already Exists!")
        } else if(err.response.data.error.message==='TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'){
            alert('Too many attempts. Please Try again Later.')
        }
    })
}