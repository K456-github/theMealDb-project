import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {MdOutlineSoupKitchen} from "react-icons/md"
import {BiSearchAlt} from "react-icons/bi"


const Navbar = () => {
  const [search,setSearch] = useState("")
  const nav = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    nav("/search/" + search)
  }


  return (
    <div className="container ">
      <nav className='flex justify-around items-center align-middle sticky top-0 p-5 bg-rose-200 shadow-lg border-b-gray-400'>
      <Link to={'/'}>
      <div className="flex justify-center items-center my-3">
        <MdOutlineSoupKitchen className='text-2xl'/>
      <p className="text-[#b5777f] text-lg font-semibold cursor-pointer font-serif">Ohaiyo!</p>
      </div>
      </Link>
      <form onSubmit={submitHandler} >
      <div className="my-3 flex align-middle items-center cursor-pointer">
        <input  value={search} onChange={e=>setSearch(e.target.value)}  type="text"placeholder='Search....' className='placeholder:text-[#b5777f] font-serif rounded border-2 border-grey border-spacing-32 ' />
        <BiSearchAlt className='text-xl'/>
      </div>
      </form>
      </nav>

    </div>
  )
}

export default Navbar
