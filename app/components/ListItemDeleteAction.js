import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

import { MaterialIcons } from "@expo/vector-icons";

import colors from '../config/colors'

export default function ListItemDeleteAction({OnPress}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={OnPress}>
      <MaterialIcons name="delete" size={40} color="white" />
    </TouchableWithoutFeedback>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})