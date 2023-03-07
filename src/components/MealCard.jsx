import React from 'react'
import {BiSearch} from "react-icons/bi"
import "./MealCard.css"

const MealCard = ({name,image,id}) => {
  return (
    <div className='relative parent p-3 cursor-pointer'>
      <img className='h-[300px] object-cover image rounded-lg' src={image} alt="" />
      <Link to={`/detail/${id}`}>
      <span className='icon bg-[#ff8896] rounded-[50%] flex align-middle items-center justify-center h-10 w-10 absolute top-[45%] left-[45%] animate-bounce'>
        <BiSearch className='text-3xl text-white '/>
      </span>
      </Link>
    </div>
  )
}

export default MealCard
