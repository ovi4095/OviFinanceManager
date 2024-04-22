import { FlatList } from 'react-native'
import React from 'react'
import IncomeListItem from './IncomeListItem'

const IncomeList = (props) => {
  return (
    <FlatList
        data={props.incomeList}
        renderItem={info => {
            return (
                <IncomeListItem
                    amount= {info.item.amount}
                    description= {info.item.description}

                />
            )
        }}
    />
  )
}

export default IncomeList