import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    image: {
      flex: 1,
      justifyContent: "center"
    },
  
    Header: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#0003"
    },

    //Hr Line definitions
    touchArea: {
        /* backgroundColor: "#fff9", */
        alignItems:"center",
        marginVertical: 5
    },

    HrRow: {
        flexDirection:'row',
        alignItems:"center",
        marginVertical: 3
    },

    switch: {
        marginHorizontal: 7,
        paddingHorizontal:8,
        paddingVertical:2,
        borderRadius:10,
        color: "white",
        backgroundColor:"#aaa6"
    },

    hrLine: {
        height:2,
        width: "30%",
        backgroundColor:
        "lightgrey",
        margin: 5
    },
  
    // login/signup common styles
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     },
     
    title: {
      color: "black",
      fontSize: 18,
      fontWeight: "700",
      backgroundColor: "#aaab",
      width: "100%",
      textAlign: "center",
      paddingVertical: 2,
      /* 
      textShadowOffset: {
        width: 2,
        height: 2,
      },shadowColor: "#00f",
      elevation: 4, */
    },
  
    inputView: {
      flexDirection: "row",
      backgroundColor: "#FFFc",
      borderRadius: 30,
      width: "70%",
      height: 45,
      alignItems: "center",
      borderWidth: 1,
      borderColor: "white",
      paddingHorizontal: 10,
    },
  
    errorPrint: {
      fontSize: 15,
      fontWeight: "700",
      color: '#aa1D27',
      textAlignVertical: "center",
      paddingHorizontal: 6,
      marginTop: 4,
      marginBottom: 8,
      height: 23,
      backgroundColor: "#fdd9",
      borderRadius: 10,
  },
  
  /*   https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639 */
    
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
    },
  
    loginBtn: {
      flexDirection: "row",
      width:"35%",
      borderRadius:20,
      height:40,
      alignItems:"center",
      marginTop:10,
      backgroundColor:"#FFFe",
      fontWeight: "bold",
      paddingHorizontal: 15,
    },
    
    buttonFont: {
      fontWeight:"bold",
      fontSize: 16,
      marginLeft: 5
    },
       
  });
  export { styles }