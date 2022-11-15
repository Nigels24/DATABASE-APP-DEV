import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Awesome from 'react-native-vector-icons/FontAwesome5'

import Mission from './AboutChildrenScreens/Mission'
import Vision from './AboutChildrenScreens/Vision'

export default function About() {
  const topNav = createMaterialTopTabNavigator()
  return (
    <topNav.Navigator
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
      <topNav.Screen
        name="Mission"
        component={Mission}
        options={{
          tabBarLabel: 'Mission',
          tabBarIcon: () => (
            <Awesome name="bullseye" color={'orangered'} size={15} />
          ),
        }}
      />
      <topNav.Screen
        name="Vision"
        component={Vision}
        options={{
          tabBarLabel: 'Vision',
          tabBarIcon: () => (
            <Awesome name="eye" color={'orangered'} size={15} />
          ),
        }}
      />
    </topNav.Navigator>
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
