import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import Login from '../components/Login';
import SignUp from '../components/SignUp';

import {styles} from '../styles/EnterPageLoginSignUp.styles';

const EnterPage = (props) => {
  
  const [switchSignUp, setSwitchSignUp] = useState(false);

  const HrSplit = () => {
    
    return (
    <TouchableOpacity style={styles.touchArea}
      onPress={() => setSwitchSignUp(!switchSignUp)}>
      
      <View style={styles.HrRow}>
        <View style={styles.hrLine}/>
        
        <Text style={styles.switch}>
          {switchSignUp ? "Retun Login" :  "Or Sign-Up" }
        </Text>
        
        <View style={styles.hrLine}/>
      </View>

    </TouchableOpacity>
    )
  };

  return (
  <View style={{flex: 1}}>
    <ImageBackground source={require("../assest/5272686.jpg")} resizeMode="cover" style={styles.image}>
      
      <Text style={styles.Header}>Books Share</Text>

      {switchSignUp ?
      <SignUp props={props}/> : <Login props={props}/>}
      
      <HrSplit/>

    </ImageBackground>
  </View>
  )
}

export default EnterPage
