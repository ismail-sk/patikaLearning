import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    box: {
      borderWidth: 1,
      paddingVertical: 13,
      paddingHorizontal: 8,
      margin: 5,
      borderRadius: 10,
      backgroundColor: "white",
    },

    title: {
      alignSelf:"center",
      fontWeight:"900",
      fontSize: 20,
      //backgroundColor:"#dadefc",
      color:"darkblue"
    },

    level: {
      flex: 1,
      //backgroundColor:"yellow",
    },

    location: {
      backgroundColor:"#bbded699",//#cd5c5c55
      alignSelf:"flex-start",
      borderRadius:15,
      paddingVertical: 5,
      paddingHorizontal:15,
    },

    textArea: {
      fontSize:18,
      fontWeight: "bold",
      margin:5      
    }

});

export { styles }