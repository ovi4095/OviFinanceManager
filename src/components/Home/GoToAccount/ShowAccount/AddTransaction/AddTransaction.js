import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RadioButton } from 'react-native-paper'
import { AddingTransaction } from '../../../../../redux/actionCreator'
import addTransactionBg from '../../../../../../assets/images/addTransaction.png'

const mapDispatchToProps = dispatch => {
  return {
    AddingTransaction: transaction => dispatch(AddingTransaction(transaction)),
  }
}

const AddTransaction = (props) => {
  const [inputNumber, setInputNumber] = useState(null);
  const [inputDescription, setInputDescription] = useState('');
  const [inputOption, setInputOption] = useState('expense'); 
  // const [inputOption, setInputOption] =useState('')
  console.log(typeof(parseFloat(inputNumber)))
  const handleAddingTransaction = () => {
    if (inputNumber === '' || inputDescription === '') {
        alert('Required a name and category name to create an account!')
    }
    else {
        props.AddingTransaction({
            key:Math.random().toString(),
            amount: inputNumber,
            description: inputDescription,
            option: inputOption
        });
        setInputNumber('');
        setInputDescription('');
        let path = inputOption === 'expense'? 'Expenses':'Income';
        props.navigation.navigate(path)

    }
  }
  return (
    <ImageBackground
      source={addTransactionBg}
      style={{width:'100%', flex: 1,}}>
        <View style={styles.container}>
        <View style={styles.inputHolder}>
        <Text
                style={styles.title}
            >Add Transaction Account</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        keyboardType = 'numeric'
                        placeholder='Add Amount of Money'
                        placeholderTextColor='#fff'
                        value={inputNumber}
                        onChangeText={text => setInputNumber(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Add Description'
                        placeholderTextColor='#fff'
                        value={inputDescription}
                        onChangeText={text => setInputDescription(text)}
                    />
                </View>
                <View style={styles.radioGroup}>
                <View style={styles.radioButton}> 
                        <RadioButton.Android 
                            value="expense"
                            status={inputOption === 'expense' ?  
                                    'checked' : 'unchecked'} 
                            onPress={() => setInputOption('expense')} 
                            color="#fff"
                        /> 
                        <Text style={styles.radioLabel}> 
                            Expense 
                        </Text> 
                    </View> 
    
                    <View style={styles.radioButton}> 
                        <RadioButton.Android 
                            value="income"
                            status={inputOption === 'income' ?  
                                    'checked' : 'unchecked'} 
                            onPress={() => setInputOption('income')} 
                            color="#fff"
                        /> 
                        <Text style={styles.radioLabel}> 
                            Income 
                        </Text> 
                    </View> 
                </View>
                <View style={styles.btnPosition}>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => {
                            handleAddingTransaction();
                        }}
                        >
                        <Text style={styles.btnTitle}>
                            Add Transaction
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
  },
  inputHolder:{
    // backgroundColor: '#fff',
    height: '100%',
    shadowColor: '#000', 
    shadowOffset: { 
        width: 0, 
        height: 2, 
    }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
  },
  title: {
      color: 'white',
      fontSize: 24,
      fontWeight: '500',
      marginTop:50,
      marginBottom:30,
      alignSelf:'center'
  },
  input: {
      width: 350,
      borderColor: '#fff',
      borderBottomWidth: 1,
      padding: 7,
      margin: 20,
  },
  btnPosition: {

    marginTop:16
  },
  btn: {
      width: 200,
      backgroundColor: '#3C3C3C',
      borderRadius: 15,
      padding:10,
      alignSelf:'center',
  },
  btnTitle: {
      color: '#fff',
      fontSize: 18,
      alignSelf:'center',
  },
  radioGroup: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginTop: 20, 
    borderRadius: 8, 
    // backgroundColor: 'white', 
    padding: 16, 
   
  }, 
  radioButton: { 
      flexDirection: 'row', 
      alignItems: 'center',
  }, 
  radioLabel: { 
      marginLeft: 8, 
      fontSize: 20, 
      color: '#fff', 
  }, 
})


export default connect(null, mapDispatchToProps)(AddTransaction);