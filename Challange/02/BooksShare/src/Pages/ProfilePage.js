import { View, Text, StyleSheet,Linking, TouchableOpacity } from 'react-native'
import React from 'react';
import users from '../assest/users.json'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfilePage = (props) => {

  /* paremetre yoksa;
    giriş yapılmış profil hesabı,
    parametre varsa;
    parametredeki kişinin profili,

    açılacak şekilde geliştirilecek
    */
  let user = users[0];



/*   let thisPerson = props.route.params.profileOfPerson;
  if(thisPerson){
    
  console.log(typeof(thisPerson))} */
  return (
  <View style={{flex:1}}>
    <View style={styles.personPic}>
      <MaterialIcons name="person" size={150} color="lightgrey" />
    </View>

    <Text style={styles.userTitle}>{user.userName}</Text>
    <View style={styles.container}>
      
      <View style={styles.row}>
        <View style={styles.explainIcon}>
          <MaterialIcons name="person" size={40} color="black" />
        </View>
        <Text style={styles.explainText}>İsim: </Text>
        <Text style={styles.dataText}>{user.name} {user.surname}</Text>
      </View>

      <HrLine/>

        <TouchableOpacity style={styles.row}
          onPress={() =>
            Linking.openURL(`mailto:${user.email}?subject=SendMail&body=HiFromApp`) }>
        <View style={styles.explainIcon}>
          <MaterialCommunityIcons name="card-account-mail" size={40} color="black" />
        </View>

        <Text style={styles.explainText}>Email: </Text>

          <Text style={styles.dataText}>{user.email}</Text>
        </TouchableOpacity> 


      <HrLine/>

      <View style={styles.row}>
        <View style={styles.explainIcon}>
          <MaterialCommunityIcons name="cake-variant" size={40} color="black" />
        </View>
        <Text style={styles.explainText}>Yaş: </Text>
          <Text style={styles.dataText}>{user.age}</Text>
        </View>

        <HrLine/>

      <View style={styles.buttonRow}>
        <Text>favoriler</Text>
        <Text>beğeniler</Text>
      </View>
    </View>
  </View>
  )
}

export default ProfilePage;


const HrLine = () => {
  return (
  <View style={{height:2, width: "60%", backgroundColor: "lightgrey"}}/>
  )};

const styles = StyleSheet.create({
  personPic: {
    alignSelf:"center",
    marginTop:50,
    padding:15,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius:100
  },

  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
   },
   
   userTitle: {
     alignSelf: 'center',
     fontSize: 28,
     fontWeight: "bold",
     marginBottom: 15,
    },

    row: {
      flexDirection: "row",
      backgroundColor: "#9992",
      alignItems: "center",
      borderRadius: 25,
      //width: "70%",
      height: 50,
      margin: 20,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "lightgrey",
    },

    explainIcon: {
      marginRight:15
    },
    explainText: {
      flex:1,
      fontSize:18,
      marginRight:15
    },
    dataText: {
      flex:4,
      fontWeight:"bold",
      fontSize:21
    },
    buttonRow: {
      position: 'absolute',
      bottom: 0,
      flexDirection: "row",
      alignContent: "space-around",
      backgroundColor: "lightgrey"

    }
  }
)