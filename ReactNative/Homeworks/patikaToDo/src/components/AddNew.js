import { View, TextInput, Button, Dimensions, StyleSheet } from 'react-native';
import React from 'react';

const AddNew = ( { AddNewItem } ) => {
  
  const [text, setText] = React.useState('');
  
  const addHandler = () => {
    
    let prepareNew = {
      "task": text,
      "complete": false
    };
    
    let merge = [...AddNewItem[0], prepareNew];
    
    AddNewItem[1](merge);
    //console.log("eklenecek: ",text, AddNewItem[0][1], prepareNew);
      setText('');
    
    }
    
    return (
    
    <View style={styles.addNewBox}>
      <TextInput style={styles.inputBox}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholder={"Yeni Yapılacak Ekle..."}
        placeholderTextColor={"white"}
        />
        { text ?
          <Button
            onPress={() => addHandler()}
            title="Listeye Kaydet"
            color="#e76f51"
          />
          :
          <></>
        }
    </View>
  )
}

const styles = StyleSheet.create({
  addNewBox: {
    backgroundColor: '#f4a261',
  },

  inputBox: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: '#ffffff99',
    borderBottomWidth: 1,
    marginHorizontal: 5,
    marginBottom: 4,
    height: Dimensions.get('window').height / 14,
  }
});

export default AddNew
