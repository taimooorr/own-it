import { FlatList,StyleSheet } from 'react-native'
import React,{useState} from 'react'


import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'

export default function MessagesScreen() {
  
  
  const initialMessages = [
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/couch.jpg'),
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/couch.jpg'),
    },
  ]
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter(m => m.id !== message.id))
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('Message selected', item)}
              RightActions={() => <ListItemDeleteAction OnPress={() => handleDelete(item)} />}
            />
          )
        }
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => { 
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/couch.jpg'),
            },
          ])
        }}
      />
    </Screen>
  )
}