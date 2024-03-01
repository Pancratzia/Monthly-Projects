import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useFetch = (url, multipleUrl = false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = useCallback(async (fetchUrl) => {
      try {
        const response = await axios.get(fetchUrl);
        const responseData = response.data;
        setData((prevData) => ({ ...prevData, ...responseData }));
        if (responseData.next !== null && multipleUrl) {
          await fetchData(responseData.next);
        } else {
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }, [multipleUrl]);
  
    useEffect(() => {
      if (!data) {
        fetchData(url);
      }
    }, [url, data, fetchData]);
  
    return { data, loading, error };
  }


  