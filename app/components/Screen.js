import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'

export default function Screen({ children }) {
  return (
    <View style={styles.container
    }>
      <SafeAreaView style={styles.screen}>
        {children}
      </SafeAreaView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
})