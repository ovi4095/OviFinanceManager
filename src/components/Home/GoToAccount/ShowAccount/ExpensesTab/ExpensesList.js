import { FlatList } from 'react-native'
import React from 'react'
import ExpensesListItem from './ExpensesListItem'

const ExpensesList = (props) => {
  return (
    <FlatList
        data={props.expenseList}
        renderItem={info => {
            return (
                <ExpensesListItem
                    amount= {info.item.amount}
                    description= {info.item.description}

                />
            )
        }}
    />
  )
}

export default ExpensesList