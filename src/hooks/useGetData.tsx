import { useState, useEffect } from "react";
import axios from "axios";

type ErrorType = {
  message: string;
};

const useGetData = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.covidtracking.com" + url);
        setData(response.data);
      } catch (error: unknown) {
        setError(error as ErrorType);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetData;
