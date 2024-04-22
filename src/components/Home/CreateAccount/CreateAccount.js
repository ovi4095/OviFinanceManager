import { View, Text, StyleSheet, TextInput, Button, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addAccount } from '../../../redux/actionCreator';

const mapDispatchToProps = dispatch => {
    return {
      addAccount: account=> dispatch(addAccount(account)),
    }
  }

const CreateAccount = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputCategory, setInputCategory] = useState('');
  
  const handleAddingAccount = () => {
    if (inputName === '' || inputCategory === '') {
        alert('Required a name and category name to create an account!')

    } else {
        props.addAccount({
            key:Math.random().toString(),
            name: inputName,
            category: inputCategory,
        });
        setInputName('');
        setInputCategory('');
        props.navigation.navigate('Finance Account')

    }
  }

  return (
    <View style={styles.container}>
        <Text
            style={styles.title}
        >Create Finance Account</Text>
        <View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Name of account holder'
                    value={inputName}
                    onChangeText={text => setInputName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Name of Category'
                    value={inputCategory}
                    onChangeText={text => setInputCategory(text)}
                />
            </View>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => {
                    handleAddingAccount();
                }}
                >
                <Text style={styles.btnTitle}>
                    Add Account
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom:20,
    },
    input: {
        width: 350,
        borderColor: '#3C3C3C',
        borderBottomWidth: 1,
        padding: 7,
        margin: 20,
    },
    btn: {
        width: 150,
        backgroundColor: '#3C3C3C',
        borderRadius: 15,
        padding:10,
        alignSelf:'center',
    },
    btnTitle: {
        color: '#fff',
        fontSize: 18,
        alignSelf:'center',
    }
})

export default connect(null, mapDispatchToProps)(CreateAccount);