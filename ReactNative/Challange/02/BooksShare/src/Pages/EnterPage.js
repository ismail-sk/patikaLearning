import { View, ImageBackground, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EnterPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
  <View style={{flex: 1}}>
    <ImageBackground source={require("../assest/5272686.jpg")} resizeMode="cover" style={styles.image}>
      
      <Text style={styles.HeadTitle}>Books Share</Text>
      
      <View style={styles.container}>
        <View style={styles.container}>
        <View style={styles.inputView}>
        <Icon name="email" size={30} color="black" />
          <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          />
        </View>
        
        <View style={styles.inputView}>
        <Icon name="lastpass" size={30} color="black" />
          <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}
          onPress={() => props.navigation.navigate("MainBottomNavPage")}>
          <Icon name="login" size={30} color="black" />
          <Text style={{fontWeight:"bold", fontSize: 16,}}>LOGIN</Text>
        </TouchableOpacity>

        </View>
      <HrSplit/>



      </View>
    </ImageBackground>
  </View>
  )
}

export default EnterPage

const HrSplit = () => {
  
  return (
  <View style={{ flexDirection:'row', alignItems:"center", marginVertical: 15}}>
    <View style={{height:2, width: "25%", backgroundColor: "lightgrey", margin: 5}}/>
    <Text style={{marginHorizontal: 7, paddingHorizontal:8, paddingVertical:2, borderRadius:10, color: "white", backgroundColor:"#aaa6"}}>Or Sign-Up</Text>
    <View style={{height:2, width: "25%", backgroundColor: "lightgrey", margin: 5}}/>
  </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
   
  image: {
    flex: 1,
    justifyContent: "center"
    
  },

  HeadTitle: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000020"
 
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: "#FFFc",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 10,
  },

/*   https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639
abox: {
    height: 60,
    width: 60,
    backgroundColor: "yellow",
  }, */
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginBtn:
 {
  flexDirection: "row",
   width:"35%",
   borderRadius:20,
   height:40,
   alignItems:"center",
   marginTop:40,
   backgroundColor:"#FFFe",
    fontWeight: "bold",
    paddingHorizontal: 15,
 }
     
});