import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const StatusBar = ( { countThis } ) => {
    let len = (countThis.filter((item) => item.complete == false)).length
    //console.log("this ", len);
  return (
    <View style={styles.sbBox}>
    <Text style={[styles.sbLeft, styles.sbFont]}>YAPILACAKLAR</Text>
    <Text style={[styles.sbCount, styles.sbFont]} >{len}</Text>
    <Text style={[styles.sbRight, styles.sbFont]}>KALDI</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  sbBox: {
    paddingHorizontal: 20,
    backgroundColor: '#fec89a',
    flexDirection: "row",
    height: Dimensions.get('window').height / 14},
    
  sbLeft: { flex: 7},
  sbCount: { flex: 1},
  sbRight: { flex: 2},

  sbFont: {
    fontWeight: "bold",
    fontSize: Dimensions.get('window').height / 32,
    textAlignVertical: "center",},
});


export default StatusBar

