import { useState, useEffect } from "react";
import axios from "axios";

const useMutate = (
  method: string,
  url: string,
  initialData = null,
  config: { manual: unknown } = { manual: null }
) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const mutate = async () => {
    try {
      setLoading(true);

      let response;

      switch (method.toLowerCase()) {
        case "post":
          response = await axios.post(url, config);
          break;
        case "put":
          response = await axios.put(url, config);
          break;
        case "delete":
          response = await axios.delete(url);
          break;
        // Add more cases for other HTTP methods if needed

        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }

      setData(response.data);
    } catch (error: unknown) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!config.manual) {
      mutate();
    }
  }, [method, url, config]);

  return { data, loading, error, mutate };
};

export default useMutate;
