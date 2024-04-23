import * as actionTypes from './actionTypes'
import axios from 'axios'
import { baseUrl } from './baseUrl'


export const loadAccount = account => {
    return {
        type: actionTypes.LOAD_ACCOUNT,
        payload: account
    }
}

export const loadTransaction = transaction => {
    return {
        type: actionTypes.LOAD_TRANSACTION,
        payload: transaction
    }
}

export const selectedAccount = account => {
    
    return {
        type: actionTypes.SELECTED_ACCOUNT,
        payload: account
    }
}

export const deleteAccount = key => {
    return {
        type: actionTypes.DELETE_ACCOUNT,
        payload: key,
    }
}

export const deleteTransaction = key => {
    return {
        type: actionTypes.DELETE_TRANSACTION,
        payload: key,
    }
}

// Add to DataBase
export const addAccount = account => (dispatch, getState) => {
    let token = getState().token;
    let userId = getState().userId;
    axios.post(baseUrl+`account/${userId}.json?auth=${token}`, account)
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

export const AddingTransaction = transaction => (dispatch, getState) => {
    let token = getState().token;
    let userId = getState().userId;
    let selectedAccount = getState().selectedAccount.key;
    axios.post(baseUrl+`${selectedAccount}/${userId}/transaction.json?auth=${token}`,transaction)
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

// Load From DataBase

export const fetchAccount = () => (dispatch, getState) => {
    let token = getState().token;
    let userId = getState().userId;
    axios.get(baseUrl+`account/${userId}.json?auth=${token}`)
    .then(response => {
        console.log("response",response)
        const account = [];
        for(let key in response.data) {
            account.push({
                ...response.data[key],
                key: key,
            })
        }
        dispatch(loadAccount(account));
    })
    .catch(err => console.log(err))
}

export const fetchTransaction = () => (dispatch, getState) => {
    let token = getState().token;
    let userId = getState().userId;
    let selectedAccount = getState().selectedAccount.key;
    axios.get(baseUrl+`${selectedAccount}/${userId}/transaction.json?auth=${token}`)
    .then(response => {
        console.log("response",response)
        const transaction = [];
        for(let key in response.data) {
            transaction.push({
                ...response.data[key],
                key: key,
            })
        }
        console.log("transaction",transaction)
        dispatch(loadTransaction(transaction));
    })
    .catch(err => console.log(err))
}

//Delete From Data Base

export const removeAccount = (key) => (dispatch, getState) => {
    let token = getState().token;
    let userId = getState().userId;
    // axios.delete(baseUrl+`account/${key}.json`)
    axios.delete(baseUrl+`account/${userId}/${key}.json?auth=${token}`)
    .then(()=> {
        alert('Account Removed Successfully!')
        dispatch(deleteAccount(key))
    })
    .catch(err => {
        alert('Failed to Remove Account!');
        console.log(err);
    })

    // axios.delete(baseUrl+`${key}.json?`)
    axios.delete(baseUrl+`${key}.json?auth=${token}`)
    .then((response) => console.log("Success!", response))
    .catch((error) => console.log("Failed!", error))
}

export const removeTransaction = (key) => (dispatch, getState) => {
    let token = getState().token;
    let userId = getState().userId;
    let selectedAccount = getState().selectedAccount.key;
    // axios.delete(baseUrl+selectedAccount+`/transaction/${key}.json`)
    axios.delete(baseUrl+`${selectedAccount}/${userId}/transaction/${key}.json?auth=${token}`)
    .then(()=> {
        alert('Transaction Removed Successfully!')
        dispatch(deleteTransaction(key))
    })
    .catch(err => {
        alert('Failed to Remove Transaction!');
        console.log(err);
    })
}