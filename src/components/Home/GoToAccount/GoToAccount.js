import { View, Text, Button, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import AccountList from './AccountList'
import { connect } from 'react-redux'
import { fetchAccount, selectedAccount } from '../../../redux/actionCreator'
import ExpensesTab from './ShowAccount/ExpensesTab/ExpensesTab'

const mapStateToProps = state => {
  return {
    accountList: state.accountList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    selectedAccount: (account) => dispatch(selectedAccount(account))
  }
}



const GoToAccount = (props) => {

  useEffect(() => {
    props.fetchAccount();
  },[])
  const handleSelectedAccount = key => {
    // const account = props.accountList.find(account => {
    //   console.log("from ACk", account.key)
    //   console.log("from key", key)
    //   return account.kye === key;
    // })
    const account = props.accountList.find(account => {
      return account.key.toString() === key.toString();
    })
    console.log("from Account", account)
    props.selectedAccount(account);
    props.navigation.navigate('Account Detail');
  }

  let option = props.accountList.length !== 0 ? "Want to Add Another Account": "Don't have Any Account?";
  return (
    <View style={styles.container}>
      <View style={styles.listPosition}>
        <AccountList
            accountList={props.accountList}
            handleSelectedAccount={handleSelectedAccount}
        />
      </View>
      <View style={styles.btnPosition}>
        <TouchableOpacity 
                style={styles.btn}
                onPress={() => {
                  props.navigation.navigate('Create Account')
                }}
                >
                <Text style={styles.btnTitle}>
                    {option}
                </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'space-between'
  },
  listPosition: {
    marginTop:20,
    marginBottom:20,
    marginLeft: 15,
  },
  btnPosition: {
    marginBottom: 80,
  },
  btn: {
      width: 350,
      backgroundColor: '#3C3C3C',
      borderRadius: 15,
      padding:10,
      marginTop: 20,
      alignSelf:'center',
  },
  btnTitle: {
      color: '#fff',
      fontSize: 18,
      alignSelf:'center',
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(GoToAccount);