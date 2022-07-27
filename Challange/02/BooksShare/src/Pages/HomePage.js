import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';

import Results from '../components/Results';
 
const HomePage = (props) => {

  return (
  <>
  <TouchableOpacity activeOpacity={0.9}
    style={{
      right: 40,
      bottom: 50,
      width: 60,
      height: 60,
      backgroundColor: "lightgreen",
      borderRadius: 30,
      position: 'absolute',
      bottom: 10,
      zIndex: 5,
    }}
    onPress={() =>
      props.navigation.navigate("AddingPage")}
      >
        <Text  style={{
            alignSelf:"center",
            height:60,
            textAlign:"center",
            textAlignVertical:"center",
            fontWeight:"800",
            fontSize:14
          }}>

          YENİ{'\n'}PAYLAŞ
          
        </Text>
  </TouchableOpacity>

  <Results props={props}/>

  </>
  )
}

export default HomePage