import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AccountListItem from './AccountListItem'

const AccountList = (props) => {
  return (
    <FlatList
        data={props.accountList}
        renderItem={info => {
            return (
                <AccountListItem
                    accountName= {info.item.name}
                    accountCategory= {info.item.category}
                    onItemPressed= {()=> props.handleSelectedAccount(info.item.key)}
                />
            )
        }}
    />
  )
}

export default AccountList