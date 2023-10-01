import React from 'react'
import { Link } from 'react-router-dom'

export const MoviesList = ( {data} ) => {
  // console.log(data)
  return (
    <>
    <ul>
    {data&& data.map((el) => (
        //console.log(el)
         <li key={el.id}><Link>{el.title ?? el.name}</Link></li>
      ))}

      {/* {Object.values(data).map((el) => (
        //console.log(el)
         <li key={el.id}><h3>{el.title}</h3></li>
      ))} */}
    </ul>
  </>)
}
