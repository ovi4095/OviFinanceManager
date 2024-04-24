import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTransaction, removeTransaction } from '../../../../../redux/actionCreator';
import IncomeList from './IncomeList';
import { useIsFocused } from '@react-navigation/native';

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
const IncomeTab = (props) => {
  const focused = useIsFocused()
  useEffect(()=>{
    props.fetchTransaction()
},[focused])

const handleDeleteTransaction = key => {
  props.removeTransaction(key)
}


let incomeList = props.selectedTransaction.filter(income => {return income.option === 'income'})
let totalIncome = 0;
for(amount of incomeList){
  // console.log("for amount", parseInt(amount.amount));
  totalIncome += parseInt(amount.amount)
}
const incomeTransactionList = incomeList.length !== 0?
      (<View style={styles.listPosition}>
      <IncomeList
          incomeList= {incomeList}
          handleDeleteTransaction={handleDeleteTransaction}
      />
      </View>):
      (<View><Text style={styles.textTitle}>
      No Transaction of Income Found.</Text></View>)


  return (
    <View style={styles.container}>
          {incomeTransactionList}
        <View style={styles.totalIncomeTab}>
          <Text style={styles.totalAmountText}>
            Total Income: {totalIncome} TK
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
    height:'86%',
    
  },
  textTitle: {
    alignSelf:'center',
    color:'#c5302e',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },
  totalIncomeTab: {
    width:'100%',
    backgroundColor:'#30c67c',
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


export default connect(mapStateToProps,mapDispatchToProps)(IncomeTab)