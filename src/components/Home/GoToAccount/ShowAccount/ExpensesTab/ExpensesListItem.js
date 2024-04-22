import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

const ExpensesListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Image 
          source={{uri:'https://firebasestorage.googleapis.com/v0/b/myfinanceapp-2f968.appspot.com/o/expense.png?alt=media&token=14ba7343-bf4a-4684-af82-ad7d0616e89d'}}
          style={{width:40, height:35, borderRadius: 100}}
        />
        <View style={styles.titlePosition}>
          <Text style={styles.textTitle}>Tk: {props.amount}</Text>
          <Text style={styles.textTitleC}>For: {props.description}</Text>
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
        backgroundColor:'#c5302e',
        margin: 5,
        borderRadius: 25,
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

export default ExpensesListItem