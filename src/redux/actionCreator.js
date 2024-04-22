import * as actionTypes from './actionTypes'
import axios from 'axios'
import { baseUrl } from './baseUrl'

export const addAccount = account => (dispatch) => {
    axios.post(baseUrl+'account.json', account)
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

export const AddingTransaction = transaction => (dispatch, getState) => {
    let selectedAccount = getState().selectedAccount.key;
    axios.post(baseUrl+selectedAccount+'/transaction.json',transaction)
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

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


export const fetchAccount = () => (dispatch) => {
    axios.get(baseUrl+'account.json')
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
    let selectedAccount = getState().selectedAccount.key;
    axios.get(baseUrl+selectedAccount+'/transaction.json')
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