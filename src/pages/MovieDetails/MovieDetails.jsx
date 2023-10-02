import { detailsMovies } from 'API/getData';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import  noImageAvailable from 'images/No-image-available.png'

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState({})



useEffect(() => {
const fetchDetailsMovies = async (item) => {
		try {
      let data = null
      setMovie({})
      data = await detailsMovies(item)
      if (data) {
        setMovie(data)
      }

		} catch (error) {
			// setError(error.response.data)
		} finally {
		}
	}

  fetchDetailsMovies(location.state.id)

}, [ location.state.id])
// console.log(movie)


  return (
    <>
      <Link to={location.state.from}> Go back</Link>
      <div>
        <img src={(movie.poster_path)?`https://image.tmdb.org/t/p/w500${movie.poster_path}`:noImageAvailable} alt="poster" width='100px' height='200px' />
      <h2>{movie.title}</h2>
      <p>User score {Math.round(movie.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h4>Genres</h4>
      <ul>
        {movie.genres&& movie.genres.map((el) =>(
           <li key={el.id}><p>{el.name}</p></li>
        ))}
       
      </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li><Link to="cast" state={{id: location.state.id, from:location.state.from}} >Cast</Link></li>
          <li><Link to="reviews"state={{id: location.state.id, from:location.state.from}}>Reviews</Link></li>
        </ul>
       
        
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
