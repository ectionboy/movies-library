import { getTrending} from 'API/getData';
import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useCallback, useEffect, useState } from 'react';

const Home = () => {
  const [trends, setTrends] = useState();
  const fetchTrends = useCallback(async () => {
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
  // const fetchSearchMovies = useCallback(async (searchText) => {
	// 	try {
	// 		// setProducts(null)
	// 		const data = await searchMovies(searchText)
  //     //console.log(data)
  //    // setTrends(data.results)
	// 		// setProducts(data.products)
	// 	} catch (error) {
	// 		// setError(error.response.data)
	// 	} finally {
	// 	}
	// }, [])

  // const fetchDetailsMovies = useCallback(async (item) => {
	// 	try {
	// 		// setProducts(null)
	// 		const data = await detailsMovies(item)
  //     console.log(data)
  //    // setTrends(data.results)
	// 		// setProducts(data.products)
	// 	} catch (error) {
	// 		// setError(error.response.data)
	// 	} finally {
	// 	}
	// }, [])

useEffect(() => {
  fetchTrends()
  
}, [fetchTrends])


 // console.log(trends)
  return (
    <div>
      {trends && <MoviesList data={trends} />}
    </div>
  );
};

export default Home;
