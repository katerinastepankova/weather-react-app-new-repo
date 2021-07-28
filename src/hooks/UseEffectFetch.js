import { useState, useEffect } from 'react';

const UseEffectFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    setData(null);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.cod >= 400) {
          setError(data.message);
          return;
        }

        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  console.log(data);

  return { data, isLoading, setUrl };
};

export default UseEffectFetch;
