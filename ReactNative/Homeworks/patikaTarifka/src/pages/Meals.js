import React  from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableWithoutFeedback, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import Config from "react-native-config";

import useFetch from '../hooks/useFetch';

const Meals = (props) => {

  const {listData: MealData, loading, error} = useFetch(Config.API_FOODS_URL + props.route.params.CatagoryName);
  
  if(loading) {
    return <ActivityIndicator size="large" />;
  }
  if(error) {
    return <Text>{error}</Text>;
  }

  const handleDetailedSelect = (mealId) => {
    props.navigation.navigate("MealDetailed", {mealId});
  }

  const renderCatagories = ({item}) => {
    
    return (
    <TouchableWithoutFeedback onPress={() => handleDetailedSelect(item.idMeal)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.strMealThumb}} />
        <Text style={styles.text}>{item.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>)
  }
  
  return (
    <SafeAreaView>
      <View>
        <FlatList data={MealData.meals} renderItem={renderCatagories} />
      </View>
    </SafeAreaView>
  )
}

export default Meals;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#0007",
    marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 15,
  },
  
  image: {
    alignSelf: 'center',
    width: Dimensions.get('window').width,
    height:  Dimensions.get('window').height /4,
  },

  text: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -40,
    width: "100%",
    textAlign: 'center',
    backgroundColor: "#1117",
  },
});