import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Catagories from './src/pages/Catagories';
import Meals from './src/pages/Meals';
import Detailed from './src/pages/Detailed';

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='CatagoryList' component={Catagories}
        options={{
          title:'Categories',
          headerTitleAlign:'center',
          headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
          headerStyle:{backgroundColor:'orange'},
          headerTintColor:'white'
        }}/>

        <Stack.Screen name='MealsList' component={Meals} 
        options={{
          title:'Meals',
          headerTitleAlign:'center',
          headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
          headerStyle:{backgroundColor:'orange'},
          headerTintColor:'white'
        }}/>

        <Stack.Screen name='MealDetailed' component={Detailed} 
        options={{
          title:'Meal Details',
          headerTitleAlign:'center',
          headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
          headerStyle:{backgroundColor:'orange'},
          headerTintColor:'white'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App