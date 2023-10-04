import { getTrending } from 'API/getData';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useCallback, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';

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
       <Oval
       className="loader"
       height={80}
       width={80}
       color="#4fa94d"
       wrapperStyle={{}}
       wrapperClass="loader"
       visible={true}
       ariaLabel="oval-loading"
       secondaryColor="#4fa94d"
       strokeWidth={2}
       strokeWidthSecondary={2}
     />
      )}
      {trends && <MoviesList data={trends} />}
    </div>
  );
};

export default Home;
