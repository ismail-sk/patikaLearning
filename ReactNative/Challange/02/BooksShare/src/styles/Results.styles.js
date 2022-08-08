import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    box: {
      //borderWidth: 1,
      padding:15,
      paddingTop:5,
      borderRadius: 10,
      backgroundColor: "white",
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.8,
      shadowRadius: 3,
    },

    title: {
      alignSelf:"center",
      fontWeight:"900",
      fontSize: 20,
    },
    t: {
        fontWeight: "bold",
    },
    rows: {marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    interaction: {
        margin: 15,
    }
    

});

export { styles }