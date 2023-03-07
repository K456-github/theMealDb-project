import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id} = useParams()
  const [meals,setMeals] = useState({})

  useEffect(() => {
    fetchMeal()
  },[])

  const fetchMeal = async () => {
    const api = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const {meals} =await api.json()
    setMeals(meals[0])
  }
  return (
    <div className='flex mx-auto w-[80%] gap-10 mt-5 items-center h-screen'>
      <img src={meals.strMealThumb} className='h-500 rounded object-cover' alt="" />
      <div className="w-[50%]">
        <h2 className='text-2xl font-semibold text-black tracking-wide mb-3'>{meals.strMeal}</h2>
      <div className="text-[#b5777f]">
      <h2 className='text-lg'>{meals.strArea}</h2>
        <p className='text-sm'>{meals.strCategory}</p>
        <p className='text-sm leading-8 tracking-wide'>{meals.strInstructions}</p>
      </div>
      </div>
    </div>
  )
}

export default Detail

