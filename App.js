
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './app/screens/LoginScreen.js';
import RegistrationScreen from './app/screens/RegistrationScreen';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import AccountScreen from './app/screens/AccountScreen.js';

export default function App() {
const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen'>
          <Stack.Screen name="Own It" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
