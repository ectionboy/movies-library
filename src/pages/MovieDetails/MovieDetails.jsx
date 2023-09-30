import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <div>MovieDetails</div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
