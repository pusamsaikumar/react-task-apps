
import { StyleSheet, Text, View ,linking} from 'react-native';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import { NavigationContainer} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Footer from './components/Footer';


export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer  >
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
     
    </Stack.Navigator>
    <Footer />
  </NavigationContainer>
    
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
