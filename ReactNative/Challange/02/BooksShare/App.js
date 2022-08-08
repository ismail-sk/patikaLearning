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
  /* 
  Uygulamanın tasarımında,
  - giriş
  - MainNav
  sayfaları için stack Navigation kullanıldı, (eklecekler)

  MainNav sayfası kendi içinde 3 pencereli Bottom Tab Bar navigasyonu kullanıyor.
  Bunlar (MainNav.js içinde):
  - Keşfetme sayfası (anaSayfa) ( HomeWindow komponenti: MainNav.js'nin içinde)
  - kişinin kendi Favorileri ( FavoritesPage.js* )
  - kişinin kendi profili ( ProfilePage.js* )

  FavoritesPage.js* ve ProfilePage.js* Tam sayfa komponentleri;
    eğer bir hesap ismi ve ID si parametre leri ile gönderilir ise;
     bakış atma(look-up) ile açılır.

    gönderilmediğinde ise;
      aktif olan hesabın kendi favorilerine/profiline geçiş yapar.

  keşfetme sayfası (HomeWindow komponenti)
    MainNav.js in içinde olan bu komponent 4 tane Stack navigasyon sayfası içerir.
    (detaylar için ./src/MainNav.js ye bakınız)
  */
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
