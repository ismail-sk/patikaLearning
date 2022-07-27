import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsPage = (props) => {
 console.log(props.route.params)
  return (
    <View>
      <Text>DetailsPage</Text>
        <Button title='go' onPress={() =>
          props.navigation.navigate("LookUpProfilePage")} ></Button>
    </View>
  )
}

export default DetailsPage