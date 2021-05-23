import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const useFetch = (url: string) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await api.fetch(url);
        setResponse(res);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { response, error, isLoading };
};

export default useFetch;
