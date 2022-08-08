import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
   },
    box: {
      borderWidth: 1,
      paddingVertical: 13,
      paddingHorizontal: 8,
      margin: 5,
      borderRadius: 10,
      backgroundColor: "white",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color:"darkred",
        marginBottom: 5,
        backgroundColor: "white",
        width: "100%",
        alignSelf: 'center',
        textAlign:"center" ,
        padding:5,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      //width: "70%",
      margin: 5,
      paddingHorizontal: 3,/* 
      borderWidth: 1,
      borderColor: "lightgrey", */
    },

    location: {
      backgroundColor:"#bbded699",//#cd5c5c55
      alignSelf:"flex-start",
      borderRadius:15,
      paddingVertical: 5,
      paddingHorizontal:15,
    },

    infoText: {
      flex:1,
      backgroundColor:"#ccc2",
      marginHorizontal:10,
      marginVertical: 3,
      paddingVertical: 2,
      borderRadius: 3,
      borderWidth:1,
      borderColor:"lightgrey",
      fontSize:14,
      textAlign: "center",
      textAlignVertical: "center",
      height: "100%"
    },
    dataText: {
      fontSize:16,
      fontWeight: "bold",
    },

    buttonSet: {
      flexDirection: "row",
      color:"white",
      fontWeight:'bold',
      fontSize: 18,
      textAlign: "center",
      textAlignVertical: "center",
      marginHorizontal: 25,
      marginVertical: 15,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 10,
      backgroundColor: 'red',
    }

});

export { styles }