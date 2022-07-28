import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import books from '../assest/books.json'
import {styles} from '../styles/Results.styles';
import { Shadow } from 'react-native-shadow-2';


const Results = ({props}) => {

    /* favorili, şu kişinin paylaştığı vb. gibi filtreleme paremetleri uygulanacak */
const listItem = ({ item, index, separators }) => {
return (
<View style={{marginHorizontal:10, marginVertical:15}}>
    <Shadow viewStyle={{alignSelf: 'stretch'}}>
        <TouchableOpacity index={index} style={styles.box} activeOpacity={0.6}
            onPress={() =>
            props.navigation.navigate("DetailsPage", {theparam: item})}>
            <>
                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.rows}>
                    <Text>
                        Yazar: <Text style={styles.t}>{item.author}</Text>
                    </Text>

                    <Text>
                        Yıl: <Text style={styles.t}>{item.year}</Text>
                    </Text>
                </View>

                <View style={styles.rows}>
                    
                    <TouchableOpacity onPress={() =>
                        props.navigation.navigate("LookUpProfilePage", {profileOfPerson: "Pre-def-Demo"})}>
                        
                        <Text>Shared By:{'\n'}
                            <Text style={styles.t}>Pre-def-Demo</Text>
                        </Text>

                    </TouchableOpacity>
                    
                    <Text style={styles.interaction}>Fav ekle</Text>
                    <Text style={styles.interaction}>Beğeni</Text>
                </View>
            </> 
        </TouchableOpacity>
    </Shadow>
</View>
)
}
  return (
    <View>
        <FlatList //style={{ marginBottom: 5}}
            data={books} renderItem={listItem}/>
    </View>
  )
}

export default Results