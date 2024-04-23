import * as actionTypes from './actionTypes';
const initState ={
    accountList: [],
    selectedAccount: null,
    selectedTransaction: [],
    isAuth: false,
    token: null,
    userId: null
}

export const rootReducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ACCOUNT:
            return {
                ...state,
                accountList: action.payload,
            }
        case actionTypes.SELECTED_ACCOUNT:
            return {
                ...state,
                selectedAccount: action.payload
            }
        case actionTypes.LOAD_TRANSACTION:
            return {
                ...state,
                selectedTransaction:  action.payload,

            }
        case actionTypes.DELETE_ACCOUNT:
            return {
                ...state,
                accountList: state.accountList.filter(account => account.key !== action.payload),
            }
        case actionTypes.DELETE_TRANSACTION:
            return{
                ...state,
                selectedTransaction: state.selectedTransaction.filter(transaction => transaction.key !== action.payload),
            }
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth: true,
                token: action.payload.token,
                userId: action.payload.userId
            }
        default:
            return state;
    }
}