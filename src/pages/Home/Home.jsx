import { getTrending } from 'API/getData';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useCallback, useEffect, useState } from 'react';

const Home = () => {
  const [trends, setTrends] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const fetchTrends = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getTrending();
      setTrends(data.results);
    } catch (error) {
      // setError(error)
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrends();
  }, [fetchTrends]);

  // console.log(trends)
  return (
    <div>
      {isLoading && (
        <>
          <h2>Loading...</h2>
        </>
      )}
      {trends && <MoviesList data={trends} />}
    </div>
  );
};

export default Home;
