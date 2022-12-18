import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function WelcomeScreen(props) {
  return (

    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <View style={styles.ButtonView}></View>
      <AppButton title="Login"></AppButton>
      <AppButton title="Register" color="secondary"></AppButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  ButtonView: {
    width: "100%",
    paddingTop: 20,
  },
  TextSay: {
    fontSize: 26,
    fontWeight:"600",
    paddingVertical: 20,
  }
});

export default WelcomeScreen;
