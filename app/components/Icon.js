import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors'

export default function Icon({ name, size = 40, bgColor = colors.black, iconColor = colors.white }) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: bgColor,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    }}>
      <MaterialIcons name={name} backgroundColor={bgColor} size={size * 0.5} color={iconColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  IconContainer: {

  }
})