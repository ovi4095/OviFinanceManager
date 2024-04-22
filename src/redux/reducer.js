import * as actionTypes from './actionTypes';
const initState ={
    accountList: [],
    selectedAccount: null,
    selectedTransaction: [],
    // selectedExpense: [],
    // selectedIncome: null,
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
                // let expense = action.payload.find(expense =>{
                //     return expense.option.toString() === 'expense'
                // })
                // let income = action.payload.find(income =>{
                //     return income.option.toString() === 'income'
                // })
                // console.log("reducer expense", expense);
                // console.log("reducer income", income);
                return {
                    ...state,
                    selectedTransaction:  action.payload,

                }
        default:
            return state;
    }
}