import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {BsYoutube} from "react-icons/bs"
import "./MealCard.css"


const Detail = () => {
  const {id} = useParams()
  const [meals,setMeals] = useState({})
  const [ingredients,setIngrediants] = useState([])

  useEffect(() =>{
    const Ingredients = [
      {id:1,
        name: meals.strIngredient1,
      },
      {id:2,
        name: meals.strIngredient2,
      },
      {id:3,
        name: meals.strIngredient3,
      },
      {id:4,
        name: meals.strIngredient4,
      },
      {id:5,
        name: meals.strIngredient5,
      },
    ];
    setIngrediants(Ingredients)
  },[ingredients])

  useEffect(() => {
    fetchMeal()
  },[])

  const fetchMeal = async () => {
    const api = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const {meals} =await api.json()
    setMeals(meals[0])
  }
  return (
    <div className='flex mx-auto w-[80%] gap-10 mt-5 items-center'>
      <img src={meals.strMealThumb} className='h-500 rounded object-cover' alt="" />
      <div className="w-[50%] transition-opacity-[100%] duration-100">
        <h2 className='text-2xl font-semibold text-black tracking-wide mb-3'>{meals.strMeal}</h2>
      <div className="text-[#795055]">
        <p className='text-lg underline decoration-[#795055] font-semibold'>{meals.strCategory}</p>
        <p className='text-sm leading-8 tracking-wide'>{meals.strInstructions}</p>
      </div>

      <div className="px-[5%] py-[3%]">
        <p className='text-[#795055] underline decoration-[#795055] font-semibold'>Ingredients</p>
        <div className="">
        {ingredients?.map(item => {
          return (
            <div className="" key={item.id}>
              <p>{item.name}</p>
            </div>
          )
        })}
       </div>
      </div>

       <div className="flex items-center">
       <a href={meals.strYoutube}>
       <button className="text-3xl text-red-500  max-w-xs transition duration-300 ease-in-out hover:scale-110">
          <BsYoutube/>
        </button>
       </a>
       
       <h2 className='text-lg font-semibold px-[80%]'>{meals.strArea}</h2>
       </div>
       
       <div className="mb-10">
        <Link to='/'>
        <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase     leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out     hover:bg-primary-600 bg-rose-300 ">
        Back To Home
        </button>
        </Link>
       </div>
      </div>
    </div>
  )
}

export default Detail

