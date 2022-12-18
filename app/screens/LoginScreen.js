import { StyleSheet, View } from 'react-native'
import React from 'react'


import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'


import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least 8 characters, one uppercase, one lowercase letter and one number").label("Password")
})
export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Formik initialValues={{ email: "",  password: "" }}
        onSubmit={() => console.log(password, email)}
        validationSchema={validationSchema}
      >
        {(args) => (
          <>
            <AppTextInput autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={args.handleChange("email")}
              placeholder="Email" />
            <AppText style={{ color: 'red' }}>{args.errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={args.handleChange("password")}
              secureTextEntry
              placeholder="Password" />
            <AppText style={{ color: 'red' }}>{args.errors.password}</AppText>
            <AppButton
              title={"Login"}
              onPress={
                args.handleSubmit
              }
            />
          </>
        )}
      </Formik>
    </Screen>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})