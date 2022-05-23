import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../screen/authScreen/ProfileScreen'
const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Profile'></Tab.Screen>
    </Tab.Navigator>
  )
}