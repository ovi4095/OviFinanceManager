import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import img from '../../../assets/favicon.png'
const Home = (props) => {
  return (
    <View style={styles.container}>
        <View>
          <TouchableOpacity
              onPress={() => props.navigation.navigate('Finance Account')}
          >
              <View style={styles.card}>
                  <Image 
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/myfinanceapp-2f968.appspot.com/o/goTo.png?alt=media&token=35c334c4-cecd-405d-8d9b-70d46a6c98f3'}}
                    style={styles.image}
                  />
                  <View style={styles.details}>
                      <Text
                        style={styles.title}
                      >Go To Account</Text>
                  </View>
              </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
              onPress={() => props.navigation.navigate('Create Account')}
          >
              <View style={styles.card}>
                  <Image
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/myfinanceapp-2f968.appspot.com/o/create.png?alt=media&token=2f10672f-c281-40dc-a161-d84d21c83c30'}}
                    style={styles.image}
                  />
                  <View style={styles.details}>
                      <Text
                        style={styles.title}
                      >Create an Account</Text>
                  </View>
              </View>
          </TouchableOpacity>
        </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:65,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
  },
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    margin: 20,
    elevation: 5,
  },
  details: {
      padding: 25,
  },
  image: {
      width: '100%',
      height: 180,
  },
  title: {
      marginBottom: 7,
      fontSize: 20,
  }
})

export default Home