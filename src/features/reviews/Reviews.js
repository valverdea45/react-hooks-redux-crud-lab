import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  
  const reviewsToDisplay = reviews.map((review) => <Review review={review} key={review.id}/>)

  return (
    <ul>
      {reviewsToDisplay}
    </ul>
  )
}

export default Reviews;
