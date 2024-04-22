import { View, Text, Button } from 'react-native'
import React from 'react'

const LogIn = (props) => {
  return (
    <View>
      <Text>LogIn</Text>
      <Button
        title='Home'
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  )
}

export default LogIn