

import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './components/Footer';
import Scanner from './components/screens/Scanner';
import ModelScreen from './components/screens/ModelScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SING UP" component={SignUp} />
      <Stack.Screen name="SCAN PRODUCT" component={Scanner} />
      <Stack.Screen name="Model" component={ModelScreen} />
    </Stack.Navigator>
    <Footer />
  </NavigationContainer>
  // <SignUp />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
