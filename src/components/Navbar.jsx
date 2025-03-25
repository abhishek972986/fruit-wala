import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Navbar = ({searchbar,showcart, }) => {
  const data = useSelector((state) => state.users.items || []);
  const count = data.length
  return (
    <div className='w-full h-[70px] flex justify-evenly items-center'>
<div className=' w-[8%] h-full bg-white rounded-md outline-0 shadow-2xl flex justify-center items-center'><IoFastFood className='text-5xl text-bold text-blue-500'/></div>
<form action="search" className='w-[60%] h-full bg-white rounded-xl shadow-2xl flex justify-start items-center px-3 gap-2'>
<FaSearch className='text-5xl text-blue-500 '/>
    <input type="text" className='bg-white text-xl  rounded-2xl h-full w-full text-center outline-0'  placeholder='Search your needs...' onChange={searchbar}/>
</form>
<div className=' relative w-[8%] h-full bg-white rounded-md outline-0 shadow-2xl flex justify-center items-center cursor-pointer' onClick={showcart}><FaShoppingCart className ='text-3xl text-bold text-blue-500'/><span className='absolute top-0.5  font-bold text-red-600 '>{count}</span></div>
    
    </div>
  )
}

export default Navbar
