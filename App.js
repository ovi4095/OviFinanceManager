import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './src/components/Auth/LogIn';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home/Home';
import CreateAccount from './src/components/Home/CreateAccount/CreateAccount';
import GoToAccount from './src/components/Home/GoToAccount/GoToAccount';
import ShowAccount from './src/components/Home/GoToAccount/ShowAccount/ShowAccount';
import { Provider } from 'react-redux';
import Store from './src/redux/store';
import Icons from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native';
import {navigate, navigationRef} from './src/NavigationRoot'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef }>
      <Provider store={Store}>
          <Stack.Navigator>
              <Stack.Screen
                options={{headerShown: false}}
                name = "Login" component={LogIn}/>
              <Stack.Screen
                options={{
                  headerLeft: null,
                  headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigate('Login')
                    }}
                    >
                    <Icons 
                      name="sign-out-alt" 
                      size={26}
                      style={{paddingRight:20}}
                    />
                  </TouchableOpacity>
                )
                }}
                  name = "Home" component={Home}/>
              <Stack.Screen 
                  options={{
                  headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigate('Login')
                    }}
                    >
                    <Icons 
                      name="sign-out-alt" 
                      size={26}
                      style={{paddingRight:20}}
                    />
                  </TouchableOpacity>
                )
                }}
                  name = "Finance Account" component={GoToAccount}/>
              <Stack.Screen
                  options={{
                  headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigate('Login')
                    }}
                    >
                    <Icons 
                      name="sign-out-alt" 
                      size={26}
                      style={{paddingRight:20}}
                    />
                  </TouchableOpacity>
                )
                }}
                  name = "Create Account" component={CreateAccount}/>
              <Stack.Screen name = "Account Detail" component={ShowAccount}/>
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
