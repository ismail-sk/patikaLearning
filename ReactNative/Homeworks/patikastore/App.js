import React from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

import SearchBox from "./src/components/SearchBox";
import Products from "./src/components/Products";

import styles from "./src/StylePack.style";
const App = () => {

  return (
    <SafeAreaView>
      <Text style={styles.brand}>PATIKASTORE</Text>
        <View>
          <SearchBox />
          <Products/>
        </View>
    </SafeAreaView>
  );
};
export default App;
