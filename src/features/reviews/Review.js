import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewRemoved } from "./reviewsSlice";
import { reviewUpdated } from "./reviewsSlice";

function Review({ review }) {

  const [ editMode, setEditMode ] = useState(false)
  const [newInput, setNewInput] = useState(review.comment)
  const dispatch = useDispatch()

  function handleDeleteClick() {
    dispatch(reviewRemoved(review.id))
  }

  function handleChange(e) {
    setNewInput(e.target.value)
  }

  function handleEditClick() {
    setEditMode((editMode) => !editMode)
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    dispatch(reviewUpdated({
      ...review,
        comment: newInput
    }))
    setEditMode(false)
  } 

  return (
    <div>
      { editMode ? 
        <div>
          <form onSubmit={handleEditSubmit}>
            <input value={newInput} onChange={handleChange}/>
            <button type="submit">Submit</button>
          </form>
          <button onClick={handleEditClick}>Cancel</button>
        </div>
      :
      <div>

      <li>{review.comment}</li>
      <button onClick={handleDeleteClick}> Delete Review </button>
      <button onClick={handleEditClick}>Edit</button>

      </div>}
      
    </div>
    
  );
}

export default Review;
