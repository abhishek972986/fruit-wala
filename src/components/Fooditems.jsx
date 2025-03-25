import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
const Fooditems = ({ fooditems ,openorder }) => {



  return (
    <div className='w-full h-full flex flex-wrap items-center justify-evenly gap-5 mt-5 min-h-[80vh]'>
      {fooditems.map((food) => (
        <div
          key={food.id}
          className='w-[350px] h-[500px] rounded-xl shadow-md bg-white flex flex-col gap-4 justify-center items-center p-4 hover:scale-[1.1] hover:shadow-2xl transition-all'
        > 
          {/* Food Image */}
          <div className='w-full h-[60%]'>
            <img src={food.food_image} alt={food.food_name} className='w-full h-full object-cover rounded-2xl' />
          </div>

          {/* Food Name */}
          <div className='text-2xl w-full text-start px-7 font-bold'>{food.food_name}</div>

          {/* Price & Type */}
          <div className='flex items-center justify-between w-full px-7'>
            <div className='text-blue-500 font-bold text-xl'>RS /~ {food.price}</div>
            <div className='text-blue-500 font-extrabold text-xl flex items-center gap-2'>
              <FaLeaf /> {food.food_type}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className='bg-blue-500 w-full text-white text-2xl p-2 rounded-xl cursor-pointer font-bold flex justify-center items-center gap-2 hover:bg-blue-400 hover:border-2 hover:border-black' onClick={()=>{openorder(food.id)}}>
            Add to Cart <BsCart3 />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Fooditems
