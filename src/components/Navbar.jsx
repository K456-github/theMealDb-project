import React from 'react'
import {MdOutlineSoupKitchen} from "react-icons/md"
import {BsFillSearchHeartFill} from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='flex justify-around p-7 rounded-lg shadow items-center bg-rose-100 sticky'>
      <div className="flex justify-center items-center">
      <MdOutlineSoupKitchen className='text-3xl '/>
      <p className='text-[#b5777f] text-lg font-semibold cursor-pointer'>Ohaiyo!</p>
      </div>
      <input className=" placeholder:text-black block bg-[#fda4af] w-60 border  rounded-md py-2 pl-9 pr-3 shadow-sm  focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
    </div>
  )
}

export default Navbar
