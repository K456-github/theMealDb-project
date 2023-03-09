import React from 'react'
import {BiSearch} from "react-icons/bi"
import { Link } from 'react-router-dom'
import "./MealCard.css"

const MealCard = ({name,image,id}) => {
  return (
    <div className='relative parent p-3 cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110'>
      <Link to={`/detail/${id}`}>
      <img className='h-[300px] object-cover image rounded-lg shadow-lg shadow-black/30 ' src={image} alt="" />
      <span className='icon bg-[#ff8896] rounded-[50%] flex align-middle items-center justify-center h-10 w-10 absolute top-[45%] left-[45%] animate-bounce'>
        <BiSearch className='text-3xl text-white '/>
      </span>
      </Link>
    </div>
  )
}

export default MealCard
