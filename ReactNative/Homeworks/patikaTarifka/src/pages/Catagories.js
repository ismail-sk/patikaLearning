import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, View, Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import Config from "react-native-config";

import useFetch from '../hooks/useFetch';

const CatagoriesPage = (props) => {

  const {listData, loading, error} = useFetch(Config.API_FULL);
  
  if(loading) {
    return <ActivityIndicator size="large" />;
  }
  if(error) {
    return <Text>{error}</Text>;
  }
  
  const renderCatagories = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleCatagorySelect(item.strCategory)}>
        <View style={styles.box}>
          <Image style={styles.image} source={{uri: item.strCategoryThumb}} />
          <Text style={styles.textArea} >
            {item.strCategory}
          </Text>
        </View>
    </TouchableWithoutFeedback>)
  }

  const handleCatagorySelect = (CatagoryName) => {
    props.navigation.navigate("MealsList", {CatagoryName});
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList  style={{backgroundColor: "orange",}} data={listData.categories} renderItem={renderCatagories} />
    </SafeAreaView>
  )
}

export default CatagoriesPage;
const styles = StyleSheet.create({
  box: {
    flexDirection:"row",
    borderWidth: 1,
    margin: 3,
    borderRadius: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "white",
  },
  
  image: {
    alignContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  textArea: {
    flex:1,
    fontSize: 26,
    fontWeight: "bold",
    textAlignVertical:"center",
    paddingLeft: 45,
  }
});