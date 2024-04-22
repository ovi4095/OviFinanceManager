import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const AccountListItem = (props) => {
  return (
    <TouchableOpacity 
        onPress={props.onItemPressed}
        >
        <View style={styles.listItem}>
          <View style={styles.listFirst} >
          <Image 
            source={{uri:'https://firebasestorage.googleapis.com/v0/b/myfinanceapp-2f968.appspot.com/o/FinancePofile.png?alt=media&token=55e3151c-c437-4564-8a09-9c8daf27ff61'}}
            style={{width:40, height:35, borderRadius: 100, marginLeft: 20}}
          />
          <View style={styles.titlePosition}>
            <Text style={styles.textTitle}>{props.accountName}</Text>
            <Text style={styles.textTitleC}>{props.accountCategory}</Text>
          </View>
          </View>
          <View style={styles.listDeleteBtn}>
            <TouchableOpacity>
              <Icon
                name='trash-alt'
                color='red'
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    listItem: {
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-around',
        width:'93%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#3e3b92',
        margin: 5,
        borderRadius: 25,
    },
    listFirst: {
       flexDirection:"row",
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

export default AccountListItem