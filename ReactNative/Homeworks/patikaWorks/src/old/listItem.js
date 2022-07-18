import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react'
// olddd
const listItem = ({ item, index, separators }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleJobSelect(item)}>
      <View style={styles.box}>
        <Text style={styles.title}>
          {item.name}
        </Text>
        <Text style={styles.level}>
          {item.levels[0].name}
        </Text>
        <Text>
          {item.company.name}
        </Text>
        <Text style={styles.location}>
          {item.locations[0].name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
const handleJobSelect = (item) => {
  console.log("touched", item.id);
  //props.navigation.navigate("DetailPage", {item});
}

export default listItem


const styles = StyleSheet.create({
    box: {
      borderWidth: 1,
      padding: 13,
      margin: 3,
      borderRadius: 10,
      backgroundColor: "white",
    },

    title: {
      fontWeight:"bold",
      paddingBottom: 10,
      paddingHorizontal: 3,
    },

    level: {
      backgroundColor:"yellow",
      alignSelf:"flex-end",
    },

    location: {
      backgroundColor:"#cd5c5c55",
      alignSelf:"flex-end",
      borderRadius:15,
      paddingVertical: 5,
      paddingHorizontal:15,
    },

    textArea: {
      flex:1,
      fontSize: 26,
      fontWeight: "bold",
      textAlignVertical:"center",
      paddingLeft: 45,
    }
  });