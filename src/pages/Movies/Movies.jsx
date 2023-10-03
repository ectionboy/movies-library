import { MoviesList } from 'components/MoviesList/MoviesList';
import { searchMovies } from 'API/getData';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Movies = () => {
const [queryData, setQueryData] = useState(null)
const [searchParams, setSearchParams] = useSearchParams()

const query = searchParams.get('search')

const handleChange = ({ target: { value } }) => {
  value ? setSearchParams({ search: value }) : setSearchParams({})
}
const formSubmit = (e) => {
  e.preventDefault()

  }


  const fetchSearchMovies = useCallback(async (searchText) => {
  	try {
  		 //setQueryData({})
  		const data = await searchMovies(searchText)
      console.log(data)
      setQueryData(data.results)
  	} catch (error) {
  		// setError(error.response.data)
  	} finally {
  	}
  }, [])
useEffect(() => {
  fetchSearchMovies(query)

}, [fetchSearchMovies, query])


  return (
    <>
<div>
        Movies
        <form 
        onSubmit={formSubmit}
        >
          <input
            type="text"
            onChange={handleChange}
            value={query??''}
          />
          <button type="submit">Search</button>
        </form>
      </div>
            {queryData && <MoviesList data={queryData} />}
    </>
  );
};

export default Movies;
