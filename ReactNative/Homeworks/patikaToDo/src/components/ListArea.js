import { ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListArea = ( { printThis, invertThis } ) => {

    const clickHandle = ( index ) => {
        // do with splice; https://youtu.be/00HFzh3w1B8?t=754
        tmp = [...printThis];

        tmp[index].complete = !tmp[index].complete;

        invertThis(tmp);
    }

  return (
    <ScrollView>
      {
      printThis.map((item, index) => {
        return (
          <Text style={item.complete ?
              [styles.todoBox, {textDecorationLine: 'line-through', fontWeight:"300"}]
              :
              styles.todoBox}
          
            key={index} onPress={() => clickHandle(index)}>
              {item.task}
          </Text> 
            )
          }
        )
      }
    </ScrollView>
  )
}

export default ListArea
const styles = StyleSheet.create({
  todoBox: {
    backgroundColor: '#f4acb7',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    fontSize: 18,
    fontWeight:"700"
  },
});
/*
https://stackoverflow.com/questions/56033817/react-native-flatlist-index-says-is-undefined
      <FlatList data={printThis}
      
        renderItem={rendering}/>
      keyExtractor={printThis.index}

      renderItem={({item, index}) => rendering(item, index)}
      
    const rendering = ({item, index}) => {
    
        console.log(item.id, index);
      return (    
        <TouchableOpacity key={index} onPress={(index) => clickHandle(index)}>
        <Text style={item.complete ? {textDecorationLine: 'line-through',}: {}}
        >
            {item.task}
        </Text></TouchableOpacity>
      )
    }
      */