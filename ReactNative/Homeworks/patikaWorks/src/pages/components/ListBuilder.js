import { View, FlatList, Text, TouchableWithoutFeedback, } from 'react-native'
import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from "./ListBuilder.Style";

const ListBuilder = ({listPack, props, isColorSchemaFav = false}) => {
  const listData = useSelector(selector => selector.itemList);
  //console.log("listData:",listData, listData.length);
  const dispatch = useDispatch();

    const printThisList = listPack;
    // console.log("lb ",printThisList);
  const listItem = ({ item, index, separators }) => {

    const handleJobSelect = (item) => {
      //console.log("touched", item.id);
      //console.log("listprops1 ",props.route);let prm = true;
      
      props.navigation.navigate("ItemDetails", [item, isColorSchemaFav]);
    }

    const FavToggleHandler = (item) => {

      let thisItem = item;
        dispatch({type: 'TOGGLE_FAV', payload: {thisItem}});
    };
    
    const IsIncludedFav = () => {
      //console.log("hgh",item);
      if (listData.length) {
      let find = listData.findIndex( (i) => item.id == i.id);
      //console.log("is herr", item.id, find>=0);
        return (
          
      (find >=0) ?
        <>
        <TouchableWithoutFeedback
          onPress={() => FavToggleHandler(item)}>

            <Icon name="favorite" size={34} color="red" />

        </TouchableWithoutFeedback>      
      </>
      :
      <>
        <TouchableWithoutFeedback
          onPress={() => FavToggleHandler(item)}>

            <Icon name="favorite-border" size={34} color="#ff3757" />
        
        </TouchableWithoutFeedback>        
      </>

        )
      }
      else {
        return (
          <>
            <TouchableWithoutFeedback
              onPress={() => FavToggleHandler(item)}>
    
                <Icon name="favorite-border" size={34} color="#ff3757" />
                
    
            </TouchableWithoutFeedback>
            
          </>)
      }
    }

    return (
      <TouchableWithoutFeedback onPress={() => handleJobSelect(item)}>
        <View style={styles.box}>
          
          <Text style={styles.title}>
            {item.name}
          </Text>
          
          <View style={{
            flexDirection: "row",//backgroundColor:"lightpink",
            alignItems:"center",
            justifyContent:"space-between",
            marginVertical: 15,
            }}>

            <Text style={[styles.level, styles.textArea]}>
              {item.levels[0].name}
            </Text>

            <Text style={styles.textArea}>
              {item.company.name}
            </Text>

            <View style={{marginHorizontal:3}}>
              <Icon name="work" size={20} />
            </View>

          </View>
          
          <View style={{
            flexDirection: "row",
            justifyContent:"space-between",
            paddingTop:10,
            }}>
              
              <Text style={[styles.location,{flex:8},
                isColorSchemaFav && {backgroundColor:"#d3cef699"}]}>

                <Icon name="location-pin" size={20} />
                {item.locations[0].name}
                
              </Text>

            <View style={{flex:1,
              alignSelf:"flex-end", paddingHorizontal:10}}>
                <IsIncludedFav itemL={item}/>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View>{
        <FlatList style={{backgroundColor: "honeydew",}}
        data={printThisList} renderItem={listItem} />}
    </View>
  )
}

export default ListBuilder;

