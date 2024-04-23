import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTransaction, removeTransaction } from '../../../../../redux/actionCreator';
import ExpensesList from './ExpensesList';

const mapStateToProps = state =>  {
  return {
    selectedTransaction: state.selectedTransaction,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchTransaction: () => dispatch(fetchTransaction()),
    removeTransaction: (key) => dispatch(removeTransaction(key))

  }
}

const ExpensesTab = (props) => {
  useEffect(()=>{
    props.fetchTransaction()
  })

  const handleDeleteTransaction = key => {
    props.removeTransaction(key)
  }

  // console.log('Selected Exp:',props.selectedTransaction)

  let expenseList = props.selectedTransaction.filter(expense => {return expense.option === 'expense'})
  // console.log("Expense List:", expenseList)
  let totalExpense = 0;
  for(amount of expenseList){
    // console.log("for amount", parseInt(amount.amount));
    totalExpense += parseInt(amount.amount)
  }
  // console.log("Total amount", totalExpense);

  const expensesTransactionList = expenseList.length !== 0?
      (<View style={styles.listPosition}>
        <ExpensesList 
          expenseList={expenseList}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </View>):
      (<View><Text style={styles.textTitle}>
      No Transaction of Expense Found.</Text></View>)

  return (
    <View style={styles.container}>
        {expensesTransactionList}
        <View style={styles.totalExpenseTab}>
          <Text style={styles.totalAmountText}>
            Total Expense: {totalExpense} TK
          </Text>
        </View>    
    </View>
  )
}

const styles =StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    margin:0,
    padding:0,
    flex:1,
    justifyContent: 'space-between'
  },
  listPosition: {
    marginTop:20,
    marginBottom:20,
    marginLeft: 15,
    height:'86%'
  },
  textTitle: {
    alignSelf:'center',
    color:'#c5302e',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  totalExpenseTab: {
    width:'100%',
    backgroundColor:'#f40752',
    padding:30,
    marginTop:-30,
    position:'relative'
  },
  totalAmountText: {
    color:'#fff',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center',
    marginRight:30,
  },

})

export default connect(mapStateToProps,mapDispatchToProps)(ExpensesTab)