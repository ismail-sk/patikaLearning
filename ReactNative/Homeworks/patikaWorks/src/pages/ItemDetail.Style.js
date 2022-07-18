import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
      title: {
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center",
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor:"#fff7",
        borderRadius: 10
      },

      basics: {
        flexDirection:"row",
        justifyContent:"space-around",
        paddingVertical: 5,
      },
  
      bottomRibbon: {
        flexDirection: "row",
        justifyContent: "space-between",
        //backgroundColor:'pink', AAAA
        padding: 10,
      },
  
      buttonText: {
        fontSize: 18,
        textAlignVertical: "center",
        textAlign:"center", 
        display:"flex",
        flex:1,
        fontWeight: "700",
        
  
      },
      commonButton: {
        flexDirection: "row",
        paddingHorizontal:10,
        paddingVertical: 5,
        borderRadius: 5,
  
      },
      linkButton: {
        minWidth: 150,
        backgroundColor: "#fff8"
      },
  
      FavButtonAdd: {
        minWidth: 210,
  
        backgroundColor: "#fff8"
  
      },
  
      FavButtonRemove: { 
        minWidth: 210,
        backgroundColor: "#ff3757"
      }
});

export { styles }