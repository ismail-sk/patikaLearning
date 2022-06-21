import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../StylePack.style';

function SearchBox() {

    return (
        <View>
            {/* https://reactnative.dev/docs/handling-text-input */}
            <TextInput style={styles.searchBoxArea}
        placeholder="Ara..."/* 
        onChangeText={newText => setText(newText)}
        defaultValue={""} */
      />
        </View>
    )
  }

export default SearchBox