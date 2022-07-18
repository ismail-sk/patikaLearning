import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import ListBuilder from './components/ListBuilder';

const Favorite = (props) => {
  const dispatch = useDispatch();
    

  const listData = useSelector(selector => selector.itemList);
  
  return (
    <View>
      
      {listData.length>0 ?
      (<>
        <ListBuilder listPack={listData} props={props} isColorSchemaFav={true} />
        <Pressable onPress={() => dispatch({type: 'CLEAN_FAVS'})}
        style={{
          alignSelf:"center",
          fontSize: 18,
          fontWeight: "bold",
          borderWidth: 2,
          margin: 15,
          paddingVertical: 5,
          paddingHorizontal: 15,
          borderRadius: 15,
        }}
      
      ><Text>Clear All</Text></Pressable>
      </>
      )
      :
      (<>
      <Text style={{
        alignSelf:"center",
        paddingVertical:80,
        fontSize: 28,
        fontWeight: "bold"
      
      }}>No any favorited yet!</Text>
      <Button
      title="Go to list of available works"
      onPress={() =>
        
        props.navigation.navigate('all')
      
      }
    />
      </>
      )}
    
    </View>
  )
}

export default Favorite;