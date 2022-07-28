import { View, Text } from 'react-native'
import React from 'react'
import Results from '../components/Results';

const FavoritesPage = (props) => {
  return (
    <View>
      <Text style={{
    color: "white",
    fontSize: 32,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000020"}}>Favoriler</Text>
      
      {/* Results komponentine giriş yapılmış kişinin hesap ismini veya IDsini
      parametre olarak gönderilerek O hesabın sadece Favorilerde olanının döküm işlemi yapılıyor/yapılacak */}
      <Results props={props} onlyFavsOf={"Pre-def-Demo"}/>
    </View>
  )
}

export default FavoritesPage