import { reviewsMovies } from 'API/getData';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Reviews = () => {
  const location = useLocation();
  const [reviews, setReviews] = useState(null)
  useEffect(() => {
    const fetchReviewsMovies = async (item) => {
        try {
          let data = null
          setReviews(null)
          data = await reviewsMovies(item)
          if (data) {
            setReviews(data.results)
          }
    
        } catch (error) {
           // console.log(error)
        } finally {
        }
      }
      fetchReviewsMovies(location.state.id)
    
    }, [ location.state.id])
      console.log(reviews)



  return (
    <div>Reviews
      <ul>
      {reviews &&( reviews.length !== 0) ? reviews.map((el) => (
        <li key={el.id}>
          <h3>Author: {el.author}</h3>
          <p>{el.content}</p>
        </li>
      )): <><h3>We don`t have any reviews for this movie.</h3></>}
      </ul>
    </div>
    
  )
}

export default Reviews