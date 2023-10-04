import { creditsMovies } from 'API/getData';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import noImageAvailable from 'images/No-image-available.png';
import { CastList } from './Cast.styles';
import { Oval } from 'react-loader-spinner';

const Cast = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [credits, setCredits] = useState(null);
  useEffect(() => {
    const fetchCreditsMovies = async item => {
      try {
        setIsLoading(true);
        let data = null;
        setCredits(null);
        data = await creditsMovies(item);
        if (data) {
          setCredits(data.cast);
        }
      } catch (error) {
        // setError(error.response.data)
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreditsMovies(location.state.id);
  }, [location.state.id]);
  //  console.log(credits)

  return (
    <div>
      {isLoading && (
        <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      
      />
      )}
      <CastList>
        {credits &&
          credits.map(el => (
            <li key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                    : noImageAvailable
                }
                alt="actor"
                width="100px"
                height="150px"
              />
              <div>
                <h3>{el.name}</h3>
                <p>Character: {el.character}</p>
              </div>
            </li>
          ))}
      </CastList>
    </div>
  );
};

export default Cast;
