import React, { useState, useEffect } from 'react'
import MealCard from './MealCard'

const Meal = () => {

const [meals,setMeals] = useState([])

useEffect(()=>{
    fetchData()
},[])
    const fetchData =async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        const {meals} =await api.json()
        setMeals(meals)
    }
  return (
    <div className='flex flex-wrap gap-2 justify-center py-10 container'>
      {meals.map(meal =>{
        return(
            <MealCard key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} id={meal.idMeal}/>
        )
      })}
    </div>
  )
}

export default Meal
