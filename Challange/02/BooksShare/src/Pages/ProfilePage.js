import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import users from '../assest/users.json'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfilePage = (props) => {
  let user = users[0];
/*   let thisPerson = props.route.params.profileOfPerson;
  if(thisPerson){
  console.log(typeof(thisPerson))} */
  return (
  <View style={{flex:1}}>
    <View style={{ alignSelf:"center",marginTop:50, padding:15, marginBottom: 35,backgroundColor: "white", borderRadius:100}}>
      <MaterialIcons name="person" size={150} color="lightgrey" />
    </View>

    <Text style={styles.userTitle}>{user.userName}</Text>
    
    <Text>İsim: {user.name} {user.surname}</Text>
  
    <View style={styles.row}>
      <MaterialCommunityIcons name="cake-variant" size={30} color="black" />
      <Text>Yaş: {user.age}</Text></View>
    <View>
      
    <Text>Email: {user.email}</Text>
      <Text>favoriler</Text>
      <Text>beğeniler</Text>
    </View>
  </View>
  )
}

export default ProfilePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
   userTitle: {
     alignSelf: 'center',
     fontSize: 28,
     fontWeight: "bold",
    },
    row: {
      flexDirection: "row",
      backgroundColor: "#FFFc",
      borderRadius: 30,
      //width: "70%",
      height: 45,
      margin: 20,
      alignItems: "center",
      borderWidth: 1,
      borderColor: "white",
      paddingHorizontal: 10,
    },

  }
  )