import React from 'react';

import Favorite from './src/pages/Favorite';
import ItemDetail from './src/pages/ItemDetail';
import FetchList from './src/pages/FetchList';

import ReduxProvider from "./src/Redux/Provider";

// "react-native-reanimated": "^2.9.1", with rn 0.69.1 is problmetic. update reanimated befeore build
// https://github.com/software-mansion/react-native-reanimated/issues/3364
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const All = () => {
  return (
        <Stack.Navigator>

          <Stack.Screen name='Lists' component={FetchList}
          options={{
            title:'Jobs List',
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
            headerStyle:{backgroundColor:'#53a8b6'},//#61c0bf
            headerTintColor:'white'
          }}/>
          
          <Stack.Screen name='ItemDetails' component={ItemDetail}
          options={{
            title:'Job Details',
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
            headerStyle:{backgroundColor:'#53a8b6'},
            headerTintColor:'white'
          }}/>
          </Stack.Navigator>
  )
}


const Fav = () => {
  return (
        <Stack.Navigator>

          <Stack.Screen name='Lists' component={Favorite}
          options={{
            title:'Favorite Jobs List',
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
            headerStyle:{backgroundColor:'#cca8e9'},
            headerTintColor:'white'
          }}/>
          
          <Stack.Screen name='ItemDetails' component={ItemDetail}
          options={{
            title:'Favorite Job Details',
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
            headerStyle:{backgroundColor:'pink'},
            headerTintColor:'white'
          }}/>
          </Stack.Navigator>
  )
}

export default function App() {
  return (
    <ReduxProvider>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="all" component={All} options={{headerShown: false}} />
        <Drawer.Screen name="favorite" component={Fav} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
    </ReduxProvider>
  );
};
