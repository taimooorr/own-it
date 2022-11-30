import { Image, StyleSheet,TouchableHighlight, View } from 'react-native'
import React from 'react'
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import AppText from './AppText'
import colors from '../config/colors'
export default function ListItem({ image, title, subTitle, onPress, RightActions,LeftActions}) {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={RightActions}
    > 
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View >
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: colors.mediumGrey,
    top: 2.5,
  },
})