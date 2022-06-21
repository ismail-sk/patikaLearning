import { Text, Image, ActivityIndicator, ScrollView, Dimensions, StyleSheet, Linking } from 'react-native';
import React from 'react';

import Config from "react-native-config";
import useFetch from '../hooks/useFetch';

const Detailed = (props) => {
  const {listData: MealData, loading, error} = useFetch(Config.API_DETAIL_URL + props.route.params.mealId);

  if(loading) {
    return <ActivityIndicator size="large" />;
  }
  if(error) {
    return <Text>{error}</Text>;
  }

  let detailed = MealData.meals[0];

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image}
        source={{uri: detailed.strMealThumb}}/>
      <Text style={styles.title}>{detailed.strMeal}</Text>
      <Text style={styles.region}>{detailed.strArea}</Text>
      <Text style={styles.seperator}/>
      <Text style={styles.parg}>{detailed.strInstructions}</Text>
           <Text style={styles.buttonSet}
              onPress={() => Linking.openURL(detailed.strYoutube)}>
                Wach on Youtube</Text>
    </ScrollView>
  )
}

export default Detailed

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  
  image: {
    alignSelf: 'center',
    width: Dimensions.get('window').width,
    height:  Dimensions.get('window').height /2,
    borderRadius: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'saddlebrown',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  region: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rosybrown',
    paddingLeft: 5,

  },

  parg: {
    fontWeight: "800",
  },

  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
    marginHorizontal:35,
  },

  buttonSet: {
    color:"white",
    fontWeight:'bold',
    fontSize: 18,
    textAlign: "center",
    margin: 25,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: 'red',
  }
});