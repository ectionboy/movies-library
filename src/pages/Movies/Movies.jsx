import { MoviesList } from 'components/MoviesList/MoviesList';
import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const movieId = 1;
  return (
    <>
      <div>Movies</div>
      <MoviesList />
      <Link to={movieId.toString()}>More</Link>
    </>
  );
};

export default Movies;
