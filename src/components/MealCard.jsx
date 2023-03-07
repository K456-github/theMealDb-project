import React from 'react'
import {BiSearch} from "react-icons/bi"
import "./MealCard.css"

const MealCard = ({name,image}) => {
  return (
    <div className='relative parent'>
      <img className='h-[300px] object-cover rounded-lg' src={image} alt="" />
      <p className='icon bg-pink-500 flex items-center justify-center h-12 w-12 absolute top-[45] left-[45]'>
        <BiSearch className='text-3xl text-white'/>
      </p>
    </div>
  )
}

export default MealCard
