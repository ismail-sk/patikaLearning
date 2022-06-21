import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../StylePack.style';

import { FlatGrid } from 'react-native-super-grid';

import productList from "../data/list.json";

function Products() {
const rendering = ({item}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.imgURL}} />
      <Text style={styles.title}>{item.title} </Text>

      <Text style={item.inStock ? styles.price : styles.title}>
        {item.price} {!item.inStock && <Text>Out of Stock</Text>}
      </Text>
    </View>
  )
}
  return (
    <>
      <FlatGrid data={productList}
        renderItem={rendering}/>
    </>
  )
}

export default Products