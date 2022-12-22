import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppText from './AppText'
import Icon from './Icon'
export default function ErrorsMsg({ Error, Visible }) {
  if (!Visible || !Error) return null;
  return (

      
      <AppText style={styles.error}>
        {Error}
      </AppText>
    
    
  )
}

const styles = StyleSheet.create({
  error: {
    marginLeft: 10,
    color: "red"
  }

})