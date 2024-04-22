import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTransaction } from '../../../../../redux/actionCreator';
import IncomeList from './IncomeList';

const mapStateToProps = state =>  {
  return {
    selectedTransaction: state.selectedTransaction,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchTransaction: () => dispatch(fetchTransaction())
  }
}

const IncomeTab = (props) => {
  useEffect(()=>{
    props.fetchTransaction()
},[])

let incomeList = props.selectedTransaction.filter(income => {return income.option === 'income'})
let totalIncome = 0;
for(amount of incomeList){
  // console.log("for amount", parseInt(amount.amount));
  totalIncome += parseInt(amount.amount)
}
  return (
    <View style={styles.container}>
        <View style={styles.listPosition}>
            <IncomeList
                incomeList= {incomeList}
            />
        </View>
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
    height:'86%'
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