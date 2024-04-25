import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExpensesTab from './ExpensesTab/ExpensesTab';
import AddTransaction from './AddTransaction/AddTransaction';
import IncomeTab from './IncomeTab/IncomeTab';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Tab = createBottomTabNavigator();

const ShowAccount = () => {
  return (
        <Tab.Navigator
            screenOptions={{
              headerTitleAlign:'center',
              tabBarShowLabel: true,
              tabBarActiveTintColor: '#696eff',
              tabBarInactiveTintColor: '#60efff'
            }}  
        >
            <Tab.Screen 
                name="Expenses" 
                component={ExpensesTab}
                options={{
                  headerStyle: {
                    backgroundColor: '#f40752'
                  },
                  headerTitleStyle: {
                    color: '#fff'
                  },
                  tabBarIcon: ({color, size}) =>(
                      <Icon
                        name='sort-amount-down-alt'
                        color={color}
                        size={size}
                      />
                  )
                  
                }}
                />
            <Tab.Screen 
                name="Income" 
                component={IncomeTab}
                options={{
                  headerStyle: {
                    backgroundColor: '#30c67c'
                  },
                  headerTitleStyle: {
                    color: '#fff'
                  },
                  tabBarIcon: ({color, size}) =>(
                      <Icon
                        name='sort-amount-up'
                        color={color}
                        size={size}
                      />
                  )
                }}
                />
            <Tab.Screen 
                name="Add Transaction" 
                component={AddTransaction}
                options={{
                  headerShown:false,
                  title: 'Transaction',
                  tabBarIcon: ({color, size}) =>(
                      <Icon
                        name='clipboard-list'
                        color={color}
                        size={size}
                      />
                  )
                }}
                />
        </Tab.Navigator>
  )
}

export default ShowAccount