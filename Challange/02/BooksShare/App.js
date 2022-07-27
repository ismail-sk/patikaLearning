import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  
  Text,
} from 'react-native';

import EnterPage from './src/Pages/EnterPage';
import MainNav from './src/MainNav';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () =>{

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator >

          <Stack.Screen name='FirstScreenPage' component={EnterPage}
          options={{
            headerShown: false
          }}
          />
          
          <Stack.Screen name='MainBottomNavPage' component={MainNav}
          options={{
            headerShown: false
          }}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
