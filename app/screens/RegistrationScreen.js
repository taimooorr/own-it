import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage';



import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain one uppercase, one lowercase letter and one number").label("Password"),
  ConfirmPassword: Yup.string().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain one uppercase, one lowercase letter and one number").label("Password")
})

const onSubmit = async (values) => {
  const firstPair = ["name", values.name]
  const secondPair = ["email", values.email]
  const thirdPair = ["password", values.password]
  
  if (await AsyncStorage.getItem('email') == values.email) {
    alert("Email already exists")
  }
  else {
    try {
      await AsyncStorage.multiSet([firstPair, secondPair, thirdPair])
      alert("Account Registered")
    } catch (e) {
      alert("Error")
    }
  }
}
export default function RegistrationScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "", ConfirmPassword: "" }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCorrect={true}
          icon="person"
          name="name"
          placeholder="Name"
          textContentType="name"
        />
        <AppFormField
          autoCapitalize="none" r
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register " />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});



