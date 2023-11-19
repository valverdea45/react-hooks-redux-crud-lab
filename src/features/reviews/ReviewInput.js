import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

// dispatch(reviewAdded({ resturantId: resturant.id, comment: review }))
function ReviewInput({ restaurantId }) {

  const [ input, setInput ] = useState("")
  const dispatch = useDispatch()

  function handleChange(e) {
    setInput(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault()
    dispatch(reviewAdded({
      restaurantId: restaurantId,
      comment: input
    }))
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>comment
      <textarea value={input} onChange={handleChange}/>
      </label>
      <button type="submit">add review</button>

    </form>
  )
}

export default ReviewInput;
