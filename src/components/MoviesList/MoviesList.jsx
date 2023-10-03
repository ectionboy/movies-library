import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ data }) => {
  // console.log(data)
  const location = useLocation();
  const link = location.pathname === '/' ? 'movies/' : '';

  // console.log(location)
  return (
    <>
      <ul>
        {data.map(el => (
          //console.log(el)

          <li key={el.id}>
            <Link
              to={link + el.id.toString()}
              state={{ id: el.id, from: location.pathname + location.search }}
            >
              {el.title ?? el.name}
            </Link>
          </li>
        ))}

        {/* {Object.values(data).map((el) => (
        //console.log(el)
         <li key={el.id}><h3>{el.title}</h3></li>
      ))} */}
      </ul>
    </>
  );
};
