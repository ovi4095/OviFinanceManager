import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import homeBackground from '../../../assets/images/home.png'
import createAccountCardBackground from '../../../assets/images/create.png'
import goToAccountCardBackground from '../../../assets/images/goTo.png'

const Home = (props) => {
  return (
    <ImageBackground
      source={homeBackground}
      style={{width:'100%', flex: 1,}}>

        <View style={styles.container}>
            <View>
              <TouchableOpacity
                  onPress={() => props.navigation.navigate('Finance Account')}
              >
                  <View style={styles.card}>
                      <Image 
                        source={goToAccountCardBackground}
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
                        source={createAccountCardBackground}
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
    </ImageBackground>
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