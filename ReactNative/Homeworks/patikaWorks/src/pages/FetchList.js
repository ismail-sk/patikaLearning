import { View,Text, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'

import useFetch from '../Hooks/useFetch';
import ListBuilder from './components/ListBuilder';

const FetchList = (props) => {
   //console.log(props.navigation);
  const [pageNum, setPageNum] = useState(1);
  const {listData, loading, error} = useFetch("https://www.themuse.com/api/public/jobs?page=" + pageNum);

  if(loading) {
    return <ActivityIndicator size="large" />;
  }
  if(error) {
    return <Text>{error}</Text>;
  }

  return ( 
    <View>
      <ListBuilder listPack={listData.results} props={props} />
    </View>
  )
}

export default FetchList