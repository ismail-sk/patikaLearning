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
  /* HomeStack hakkında açıklamalar;
  HomePage.js: tüm paylaşılan kitapların keşfedilebileceği alan. FireBase.DB kullanılarak depolanacaklar(şu anlık Json)

  DetailsPage.js: dokunulan kutu daki kitap hakkında daha fazla bilgi için açılan sayfa

  ProfilePage.Js: kutudaki "paylaşan kişi / shared by"  a dokunulduğunda
    ilgili kişinin profiline yönlendirir(DB yapıldıkdan sonra tamamlancak)

  AddingPage.js: giriş yapılmış hesap adına kitap ekleme/paylaşma sayfası
  */
  return (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomePage" component={HomePage}
      options={{
        headerShown: false
        }}/>
    <HomeStack.Screen name="DetailsPage" component={DetailsPage}
          options={{
            title:'Kitap Detayları',
            headerShown: true
          }}/>
    <HomeStack.Screen name="LookUpProfilePage" component={ProfilePage} 
          options={{
            headerShown: false
          }}/>
    <HomeStack.Screen name="AddingPage" component={AddingPage} 
          options={{
            title:'Kitap Paylaşma',
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
            //title:'Explore',
            headerShown: false,
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#009400' : color}}>Explore</Text>
            ),
            tabBarIcon: ({ focused }) => (
                <MaterialIcons name="explore" size={30} color={focused ? '#009400' : 'gray'} />

            )
          }}/>
      <Tab.Screen name="MyFavorites" component={FavoritesPage} 
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? 'red' : color}}>My Favorites</Text>
            ),
            //title:'My Favorites',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="favorite-border" size={30} color={focused ? 'red' : 'gray'} />

            )/* 
            headerTitleAlign:'center',
            headerTitleStyle:{color:'white',fontWeight:'600',fontSize:32},
            headerStyle:{backgroundColor:'#53a8b6'},//#61c0bf
            headerTintColor:'white' */
          }}/>
      <Tab.Screen name="meProfile" component={ProfilePage} 
          options={{
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? 'blue' : color}}>My Profile</Text>
            ),
            //title:'My Profile',
            tabBarIcon: ({ focused }) => (
              <AntDesign name="profile" size={30} color={focused ? 'blue' : 'gray'} />

            ),
            headerShown: false
          }}/>

    </Tab.Navigator>
  )
}

export default MainNav