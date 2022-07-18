import { View, Text, ScrollView, Linking, TouchableWithoutFeedback, Pressable, useWindowDimensions } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import { styles } from "./ItemDetail.Style";

import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ItemDetail = (props) => {
  const listData = useSelector(selector => selector.itemList);

  let isColorSchemaFav = props.route.params[1];
  let colorSelected = isColorSchemaFav ?
  colorSelected = ["#fae3e9", 'pink'] :
  colorSelected = ["#bbe4e9", '#79c2d0'];
  //console.log("col",colorSelected);
  const { width } = useWindowDimensions();
  //console.log("listprops2 ",props.route.params[1]);

  let item = props.route.params[0];
  let source = { html: item.contents };

  const dispatch = useDispatch();
  
  const FavToggleHandler = (item) => {

    let thisItem = item;
      dispatch({type: 'TOGGLE_FAV', payload: {thisItem}});
  };


  const IsIncludedFav = () => {
    let find = listData.findIndex( (i) => item.id == i.id);
    //console.log("is herr", item.id,find>=0);
    return (
      (find >=0) ?
      <>
        <TouchableWithoutFeedback
          onPress={() => FavToggleHandler(item)}>

          <View style={[styles.FavButtonRemove, styles.commonButton]}>

            <Icon name="favorite" size={34} color="white" />

            <Text style={[styles.buttonText, {color:"white"}]}>Remove From Favs</Text>

          </View>

        </TouchableWithoutFeedback>
      
      </>
      :
      <>
        <TouchableWithoutFeedback
          onPress={() => FavToggleHandler(item)}>

          <View style={[styles.FavButtonAdd, styles.commonButton]}>

            <Icon name="favorite-border" size={34} color="#ff3757" />
            
            <Text style={styles.buttonText}>Add Favorite</Text>  

          </View>

        </TouchableWithoutFeedback>
        
      </>
    )

    

  }//#dadefc

  return (
    <View style={{ flex: 1}}>

      <View style={{backgroundColor:colorSelected[0], padding: 5}}>
        <Text style={styles.title}>{item.name}</Text>

        <View style={styles.basics}>
          <Text>Location: {item.locations[0].name}</Text>
          <Text>Job Level: {item.levels[0].name}</Text>
        </View>
      </View>

      <ScrollView >
        <RenderHtml contentWidth={width} source={source}/>
      </ScrollView>

      <View style={[styles.bottomRibbon, {backgroundColor:colorSelected[1]}]}>
            
        <Pressable onPress={() => Linking.openURL(item.refs.landing_page)
      }>
          <View style={[styles.linkButton, styles.commonButton]}>
          
          <Icon name="link" size={34} color="#ff3757" />

          <Text style={styles.buttonText}>Contact</Text>
          </View>
        </Pressable>
        
        <IsIncludedFav />
        
      </View>
    </View>
  )
}

export default ItemDetail
/* 
const styles = StyleSheet.create({
    box: {
      borderWidth: 1,
      padding: 13,
      margin: 3,
      borderRadius: 10,
      backgroundColor: "white",
    },

    title: {
      fontSize:18,
      fontWeight:"bold",
      alignSelf:"center",
      padding: 5,
    },
    basics: {
      flexDirection:"row",
      justifyContent:"space-around",
      paddingVertical: 3,
    },

    level: {
      backgroundColor:"yellow",
      alignSelf:"flex-end",
    },

    location: {
      backgroundColor:"#cd5c5c55",
      alignSelf:"flex-end",
      borderRadius:15,
      paddingVertical: 5,
      paddingHorizontal:20,
    },

    bottomRibbon: {
      flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
      backgroundColor:'pink',
      padding: 10,
    },

    buttonText: {
      fontSize: 18,
      textAlignVertical: "center",
      textAlign:"center", 
      display:"flex",
      //backgroundColor:"#2226",
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

  
  
    "@emotion/react": "^11.9.3",
    "@emotion/styled": "^11.9.3",
    "@mui/icons-material": "^5.8.4",
    "@mui/material": "^5.9.0",
    "@mui/styled-engine-sc": "^5.8.0",
    "react-dom": "^18.2.0", */