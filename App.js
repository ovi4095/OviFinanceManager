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
// import ExpensesTab from './src/components/Home/GoToAccount/ShowAccount/ExpensesTab/ExpensesTab';
// import IncomeTab from './src/components/Home/GoToAccount/ShowAccount/IncomeTab/IncomeTab';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
          <Stack.Navigator>
              <Stack.Screen name = "Login" component={LogIn}/>
              <Stack.Screen name = "Home" component={Home}/>
              <Stack.Screen name = "Finance Account" component={GoToAccount}/>
              <Stack.Screen name = "Create Account" component={CreateAccount}/>
              <Stack.Screen name = "Account Detail" component={ShowAccount}/>
              {/* <Stack.Screen name="Expenses" component={ExpensesTab} />
              <Stack.Screen name="Income" component={IncomeTab} /> */}
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
