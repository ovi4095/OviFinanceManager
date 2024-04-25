import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import accountProfile from '../../../../assets/images/FinancePofile.png'

const AccountListItem = (props) => {
  return (
    <TouchableOpacity 
        onPress={props.onItemPressed}
        >
        <View style={styles.listItem}>
          <View>
            <Image 
              source={accountProfile}
              style={{width:50, height:50, borderRadius: 100, marginLeft: 1}}
            />
          </View>
          <View style={styles.titlePosition}>
            <Text style={styles.textTitle}>{props.accountName}</Text>
            <Text style={styles.textTitleC}>{props.accountCategory}</Text>
          </View>
          <View style={styles.listDeleteBtn}>
            <TouchableOpacity>
              <Icon
                name='trash-alt'
                color='red'
                size={40}
                onPress={props.onItemPressedDeleteAccount}
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
        justifyContent:'',
        width:'93%',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#103783',
        margin: 5,
        borderRadius: 25,
        elevation: 5,
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
    emptyAccountListMsgTitle: {
      fontSize: 22,
      
      alignSelf:'center'

    }
})

export default AccountListItem