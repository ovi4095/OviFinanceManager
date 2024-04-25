import { View, Text, Button, StyleSheet, Touchable, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import AccountList from './AccountList'
import { connect } from 'react-redux'
import { fetchAccount, removeAccount, selectedAccount } from '../../../redux/actionCreator'
import { useIsFocused } from '@react-navigation/native'
import accountBackground from '../../../../assets/images/accountList.png'

const mapStateToProps = state => {
  return {
    accountList: state.accountList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchAccount: () => dispatch(fetchAccount()),
    selectedAccount: (account) => dispatch(selectedAccount(account)),
    removeAccount: (key) => dispatch(removeAccount(key)),
  }
}



const GoToAccount = (props) => {

  const focused = useIsFocused()

  useEffect(() => {
    props.fetchAccount();
  },[focused])

  const handleSelectedAccount = key => {
    // const account = props.accountList.find(account => {
    //   console.log("from ACk", account.key)
    //   console.log("from key", key)
    //   return account.kye === key;
    // })
  const account = props.accountList.find(account => {
      return account.key.toString() === key.toString();
    })
    // console.log("from Account", account)
    props.selectedAccount(account);
    props.navigation.navigate('Account Detail');
  }

  const handleDeleteAccount = key => {
    // props.removeAccount(key);
    Alert.alert(
      'Delete Account?',
      `Do you really want to Delete this Account?`,
      [
        {
          text: 'Cancel',
          onPress: ()=> console.log('Cancelled!'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => props.removeAccount(key),
        }
      ],
      {cancelable: false }
    )
  }

  const accountList = props.accountList.length !== 0? (
    <AccountList
               accountList={props.accountList}
               handleSelectedAccount={handleSelectedAccount}
               handleDeleteAccount={handleDeleteAccount}
           />
  ) : (
    <Text style={styles.emptyAccountListMsgTitle}>
        No Account in the List!
    </Text>
  );

  let option = props.accountList.length !== 0 ? "Want to Add Another Account": "Don't have Any Account?";
  return (
    <ImageBackground
      source={accountBackground}
      style={{width:'100%', flex: 1,}}>
        <View style={styles.container}>
          <View style={styles.listPosition}>
            <View style={styles.listTitle}>
                <Text style={styles.listTitleText}>
                    Account List
                </Text>
            </View>
            <View>
              {accountList}
            </View>
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
    </ImageBackground>
      
  )
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'space-between'
  },
  listTitle: {
    marginTop:-20,
    marginBottom: 10,
    // backgroundColor:'#8399a2',
    width:'100%',
    padding:10,
    marginLeft: -8,
  },
  listTitleText: {
    alignSelf:'center',
    fontSize: 28,
    fontWeight: '600',
    color:'#fff',
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
      marginTop: 20,
      alignSelf:'center',
  },
  btnTitle: {
      padding:15,
      color: '#fff',
      fontSize: 18,
      alignSelf:'center',
  },
  emptyAccountListMsgTitle: {
    color:'#e01f2d',
    fontSize: 22,
    padding: 30,
    alignSelf:'center',
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(GoToAccount);