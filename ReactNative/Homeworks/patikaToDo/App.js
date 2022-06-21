import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import StatusBar from "./src/components/StatusBar";
import ListArea from "./src/components/ListArea";
import AddNew from "./src/components/AddNew";

import exampleList from "./src/data.json";

function App() {
  const [ listItems, setListItems] = React.useState(exampleList);

  return (
  <SafeAreaView style={styles.container}>
    
    <StatusBar countThis = {listItems}/>
    
    <ListArea printThis = {listItems}
      invertThis = {setListItems}/>
    
    <AddNew style={styles.bottom}
      AddNewItem = {[listItems, setListItems]}/>

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe5d9',
  }
});

export default App;
