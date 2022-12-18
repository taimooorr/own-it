import React from "react";
import { Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";

function ViewImageScreen(props) {
  return (
    


    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      <TouchableOpacity style={styles.closeIcon}>
        <MaterialIcons name="close" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteIcon}>
        <MaterialIcons name="delete" size={35} color="white" />
      </TouchableOpacity>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    top: 25,
    left: 25,
    position: "absolute",
  },
  deleteIcon: {
    top: 25,
    right: 25,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
