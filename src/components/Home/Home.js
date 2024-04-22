import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import img from '../../../assets/favicon.png'
const Home = (props) => {
  return (
    <View>
      <TouchableOpacity
          onPress={() => props.navigation.navigate('Finance Account')}
      >
          <View style={styles.card}>
              <Image
                source={img}
                style={styles.image}
              />
              <View style={styles.details}>
                  <Text
                    style={styles.title}
                  >Go To Account</Text>
              </View>
          </View>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => props.navigation.navigate('Create Account')}
      >
          <View style={styles.card}>
              <Image 
                source={img}
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
  )
}

const styles = StyleSheet.create({
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
      height: 150,
  },
  title: {
      marginBottom: 7,
      fontSize: 20,
  }
})

export default Home