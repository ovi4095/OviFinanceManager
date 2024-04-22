import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExpensesTab from './ExpensesTab/ExpensesTab';
import AddTransaction from './AddTransaction/AddTransaction';
import IncomeTab from './IncomeTab/IncomeTab';

const Tab = createBottomTabNavigator();

const ShowAccount = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Expenses" component={ExpensesTab} />
        <Tab.Screen name="Income" component={IncomeTab} />
        <Tab.Screen name="Add Transaction" component={AddTransaction} />
    </Tab.Navigator>
  )
}

export default ShowAccount