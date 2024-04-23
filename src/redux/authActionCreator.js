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
    .catch(err => {
        console.log(err);
        alert("Authentication Failed!")
    })
    .then(res => res.data)
    .then(data => {
        if(data.error) {
            alert(data.error.message);
        }else {
            dispatch(authUser({token: data.idToken, userId: data.localId}));
            navigate('Home');
        }
        console.log(data)
    })
}