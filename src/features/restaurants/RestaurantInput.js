import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {

  const [ input, setInput ] = useState("")
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(restaurantAdded(input))
    setInput("")
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

      <label>Name
      <input type="text" value={input} onChange={handleChange}/>
      </label>
      <button type="submit">Add Restaurant</button>

      </form>
    
    </div>
  )
}

export default RestaurantInput;
