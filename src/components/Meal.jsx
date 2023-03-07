import React, { useState, useEffect } from 'react'
import MealCard from './MealCard'

const Meal = () => {

const [meals,setMeals] = useState([])

useEffect(()=>{
    fetchData()
},[])
    const fetchData =async () => {
        const api = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        const {meals} =await api.json()
        setMeals(meals)
        console.log(meals)
    }
  return (
    <div className='flex flex-warp gap-2'>
      {meals.map(meal =>{
        return(
            <MealCard key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb}/>
        )
      })}
    </div>
  )
}

export default Meal
