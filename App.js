import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BeginHome from './oComponents/authComponents/BeginHome'
import SignUp from './oComponents/authComponents/SignUp';
import SignIn from './oComponents/authComponents/SignIn';
import Home from './oComponents/Home';
import VoteTelugu from './oComponents/VoteTelugu';
import CheckPercenta from './oComponents/CheckPercenta';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BeginHome"
          component={BeginHome}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="VoteTelugu"
          component={VoteTelugu}
        />
        <Stack.Screen
          name="CheckPercentages"
          component={CheckPercenta}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;