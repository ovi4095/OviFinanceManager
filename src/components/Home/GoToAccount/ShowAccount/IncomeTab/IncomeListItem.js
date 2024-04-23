import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IncomeListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <View>
        <Image 
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/myfinanceapp-2f968.appspot.com/o/income.png?alt=media&token=27ee923e-9605-47c2-9b14-84fa0a6bf270'}}
            style={{width:40, height:35, borderRadius: 100}}
          />
      </View>
      <View style={styles.titlePosition}>
        <Text style={styles.textTitle}>Tk: {props.amount}</Text>
        <Text style={styles.textTitleC}>From: {props.description}</Text>
      </View>
      <View style={styles.listDeleteBtn}>
            <TouchableOpacity>
              <Icon
                name='trash-alt'
                color='red'
                size={40}
                onPress={props.onItemPressed}
              />
            </TouchableOpacity>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        display:"flex",
        flexDirection:"row",
        justifyContent:'flex-start',
        width:'93%',
        alignItems: 'center',
        padding: 10,
        backgroundColor:'#60696b',
        margin: 5,
        borderRadius: 25,
    },
    listDeleteBtn:{
      alignSelf:'flex-start',
      marginRight:20,
    },
    titlePosition: {
      flex: 1
    },
    textTitle: {
      color:'#fff',
      marginLeft: 20,
      fontSize: 20,
      fontWeight: 'bold'
    },
    textTitleC: {
      color:'#fff',
      marginLeft: 20,
      fontSize: 18,
      fontWeight: '400',
    },
})

export default IncomeListItem