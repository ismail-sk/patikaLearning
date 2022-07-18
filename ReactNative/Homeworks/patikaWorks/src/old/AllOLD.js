import { View, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ItemDetail from './ItemDetail';
import List from './List';

//import Config from "react-native-config";

const Stack = createNativeStackNavigator();

const All = () => {
  //console.log("All1 ",listData.results[1].description);
  return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Lists' component={List}
          options={{
            title:'Jobs List',
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
            headerStyle:{backgroundColor:'orange'},
            headerTintColor:'white'
          }}/>
          
          <Stack.Screen name='ItemDetails' component={ItemDetail}
          options={{
            title:'Job Details',
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
            headerStyle:{backgroundColor:'pink'},
            headerTintColor:'white'
          }}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default All;