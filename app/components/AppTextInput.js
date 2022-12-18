import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import  defaultStyles from '../config/styles';

export default function AppTextInput({icon,...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialIcons name={icon} size = {20} color={colors.mediumGrey} style={styles.icon} />}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginTop: 2,
    marginRight: 10,
  },
})