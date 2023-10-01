import { getTrending } from 'API/getData';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useCallback, useEffect, useState } from 'react';

const Home = () => {
  const [trends, setTrends] = useState();
  const fetchProducts = useCallback(async (searchText) => {
		try {
			// setProducts(null)
			const data = await getTrending()
      setTrends(data.results)
			// setProducts(data.products)
		} catch (error) {
			// setError(error.response.data)
		} finally {
		}
	}, [])
useEffect(() => {
  fetchProducts()

}, [fetchProducts])


  console.log(trends)
  return (
    <div>
      Home
      <MoviesList data={trends} />
    </div>
  );
};

export default Home;
