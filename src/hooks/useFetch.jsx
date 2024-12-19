import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) {
        setData([]); 
        setIsLoading(false);
        return;
      }

      try {
        console.log(`Fetching data from: ${url}`);
        const response = await axios.get(url);
        console.log("Fetched response:", response);
        setData(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
