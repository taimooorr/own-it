import { StyleSheet, Text, TouchableOpacity} from 'react-native'

import React from 'react'
import colors from '../config/colors'

export default function AppButton({ title, onPress, color = "primary", style }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '85%',
    marginVertical: 3,
    marginHorizontal: 30
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',


  }
})