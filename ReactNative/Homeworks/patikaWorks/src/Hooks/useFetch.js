import { useEffect, useState } from "react";
import axios from 'axios';


function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState({});
  //console.log("fetch1; ",url);

  const fetchData = async () => {
    try {      
    const {data} = await axios.get(url);
    //console.log("fetch2; ",data.total);
    setListData(data);
    setLoading(false);

    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
    useEffect(() => {
        fetchData();
        //console.log("fetch3; ","calistimi?");
    }, []);
    //console.log("fetch4; ", listData.results[1].description); 
    return {listData, loading, error}
}

export default useFetch;