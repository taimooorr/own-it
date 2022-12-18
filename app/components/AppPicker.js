import { StyleSheet,Button, Text, TextInput, View ,TouchableWithoutFeedback, Modal, FlatList} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


export default function AppPicker({ icon,items,onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <TouchableWithoutFeedback onPress={()=>setModalVisible(true)  }>
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.mediumGrey} style={styles.icon} />}
      <AppText style={styles.text}>{selectedItem ? selectedItem.label :placeholder }</AppText>
      <MaterialCommunityIcons style={styles.iconChevron} name="chevron-down" size={20} color={colors.mediumGrey}
      />
      </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="fade" >
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) =>
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }} />
            }
          />
        </Screen>
      </Modal>
    </>

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
  text:
  {
    flex: 1,
  },
  iconChevron: {
    alignSelf: 'center',
  }
})