import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Awesome from 'react-native-vector-icons/FontAwesome5'

import Mainpage from './HomeChildrenScreens/Mainpage'
import Library from './HomeChildrenScreens/Library'
import Favorites from './HomeChildrenScreens/Favorites'

export default function Home() {
  const BotNav = createMaterialBottomTabNavigator()
  return (
    <BotNav.Navigator
      initialRouteName="Main"
      initialLayout={{ width: Dimensions.get('window').width }}
      screenoptions={{
        animationEnabled: true,
        swipeEnabled: true,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: 'orangered',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <BotNav.Screen
        name="Main"
        component={Mainpage}
        options={{
          tabBarLabel: 'Main Page',
          tabBarIcon: () => (
            <Awesome name="home" color={'orangered'} size={15} />
          ),
        }}
      />
      <BotNav.Screen
        name="Fav"
        component={Favorites}
        options={{
          tabBarLabel: 'My Favorites',
          tabBarIcon: () => (
            <Awesome name="heart" color={'orangered'} size={15} />
          ),
        }}
      />
      <BotNav.Screen
        name="Lib"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: () => (
            <Awesome name="book" color={'orangered'} size={15} />
          ),
        }}
      />
    </BotNav.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
