import { detailsMovies } from 'API/getData';
import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import noImageAvailable from 'images/No-image-available.png';

import {
  AdditionalList,
  Container,
  GenresList,
  MovieImg,
  MovieWrap,
} from './MovieDetails.styled';
import { Oval } from 'react-loader-spinner';

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchDetailsMovies = async item => {
      try {
        setIsLoading(true);
        let data = null;
        setMovie({});
        data = await detailsMovies(item);
        if (data) {
          setMovie(data);
        }
      } catch (error) {
        // setError(error)
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailsMovies(location.state.id);
  }, [location.state.id]);
  // console.log(movie)

  // console.log(location)
  // console.log(location.state.from)
  return (
    <Container>
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

{!isLoading && (
      <div>
        <Link className="link" to={location.state.from}>
          {' '}
          Go back
        </Link>
        <div>
          <MovieWrap>
            <MovieImg
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : noImageAvailable
              }
              alt="poster"
              width="100px"
              height="200px"
            />
            <div>
              <h2>{movie.title}</h2>
              <p>User score {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </MovieWrap>
          <h3>Genres</h3>
          <GenresList>
            {movie.genres &&
              movie.genres.map(el => (
                <li key={el.id}>
                  <p>{el.name}</p>
                </li>
              ))}
          </GenresList>
        </div>
        <div>
          <h3>Additional information</h3>
          <AdditionalList>
            <li>
              <Link
                className="link"
                to="cast"
                state={{ id: location.state.id, from: location.state.from }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="reviews"
                state={{ id: location.state.id, from: location.state.from }}
              >
                Reviews
              </Link>
            </li>
          </AdditionalList>
        </div>
        <Suspense fallback={<Oval
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
        />}>
          <Outlet />
        </Suspense>
      </div>)}
    </Container>
  );
};

export default MovieDetails;
