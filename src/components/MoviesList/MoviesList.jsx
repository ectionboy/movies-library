import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  List,
  ListImg,
  ListItem,
  ListLink,
  ListSection,
} from './MoviesList.styled';
import noImageAvailable from 'images/No-image-available.png';

export const MoviesList = ({ data }) => {
  // console.log(data)
  const location = useLocation();
  const link = location.pathname === '/' ? 'movies/' : '';

  // console.log(location)
  return (
    <ListSection>
      <List>
        {data.map(el => (
          //console.log(el)
          <Link
            key={el.id}
            className="link"
            to={link + el.id.toString()}
            state={{ id: el.id, from: location.pathname + location.search }}
          >
            <ListItem>
              <ListImg
                src={
                  el.poster_path
                    ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                    : noImageAvailable
                }
                alt="poster"
              />
              <ListLink>{el.title ?? el.name}</ListLink>
            </ListItem>
          </Link>
        ))}

        {/* {Object.values(data).map((el) => (
        //console.log(el)
         <li key={el.id}><h3>{el.title}</h3></li>
      ))} */}
      </List>
    </ListSection>
  );
};
