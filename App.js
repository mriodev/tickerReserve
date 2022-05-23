import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { colors } from './src/global/style'
import SignInScreen from './src/screen/authScreen/SignInScreen'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import ProfileScreen from './src/screen/authScreen/ProfileScreen'
import Header from './src/component/Header'
import BottomNavigation from './src/navigation/BottomNavigation'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content'
        backgroundColor={colors.statusbar}></StatusBar>
      <Header></Header>
      <ProfileScreen></ProfileScreen>

    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})