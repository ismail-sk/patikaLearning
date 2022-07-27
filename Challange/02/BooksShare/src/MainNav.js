import { Animated, Dimensions, Image, Platform, View, Text,Button } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from './Pages/HomePage';
import AddingPage from './Pages/AddingPage';
import DetailsPage from './Pages/DetailsPage';

import FavoritesPage from './Pages/FavoritesPage';
import ProfilePage from './Pages/ProfilePage'

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeWindow = () => {
  return (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomePage" component={HomePage}
      options={{
        headerShown: false
        }}/>
    <HomeStack.Screen name="DetailsPage" component={DetailsPage}
          options={{
            headerShown: false
          }}/>
    <HomeStack.Screen name="LookUpProfilePage" component={ProfilePage} 
          options={{
            headerShown: false
          }}/>
    <HomeStack.Screen name="AddingPage" component={AddingPage} 
          options={{
            headerShown: false
          }}/>
  </HomeStack.Navigator>
  )
}

const MainNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={HomeWindow} 
          options={{
            title:'Explore',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <MaterialIcons name="explore" size={30} color={focused ? 'blue' : 'gray'} />

            )
          }}/>
      <Tab.Screen name="MyFavorites" component={FavoritesPage} 
          options={{            
            title:'My Favorites',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="favorite-border" size={30} color={focused ? 'blue' : 'gray'} />

            )/* 
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
            headerStyle:{backgroundColor:'#53a8b6'},//#61c0bf
            headerTintColor:'white' */
          }}/>
      <Tab.Screen name="meProfile" component={ProfilePage} 
          options={{
            title:'My Profile',
            tabBarIcon: ({ focused }) => (
              <AntDesign name="profile" size={30} color={focused ? 'blue' : 'gray'} />

            ),
            headerShown: false
          }}/>

    </Tab.Navigator>
  )
}

export default MainNav