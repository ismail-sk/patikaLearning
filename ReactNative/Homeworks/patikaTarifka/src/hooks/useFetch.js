import { useEffect, useState } from "react";

import axios from 'axios';


function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState({});
  //console.log(url);

  const fetchData = async () => {
    try {      
    const {data} = await axios.get(url);
    //console.log("test1",data);
    setListData(data);
    setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
    useEffect(() => {
        fetchData();
        //console.log("calistimi?");
    }, []);
    //console.log("test2",listData);
    return {listData, loading, error}
}

export default useFetch;