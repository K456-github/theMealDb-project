import React from 'react'
import "./MealCard.css"

const MealCard = ({name,image}) => {
  return (
    <div>
      <img className='h-[300px] object-cover rounded-lg' src={image} alt="" />
    </div>
  )
}

export default MealCard
