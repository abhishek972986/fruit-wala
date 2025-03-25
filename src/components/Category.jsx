import React from 'react'
import Categories from './categorydata'

const Category = ({ filteredItems, activeCategory }) => {
  return (
    <div className='w-full flex flex-wrap justify-center items-center gap-4 mt-2.5'>
      {Categories.map((cat) => (
        <div 
          key={cat.id} 
          className={`w-[150px] h-[150px] bg-white rounded-xl shadow flex flex-col justify-center items-center transition-all ease-in duration-75 cursor-pointer border-4 
            ${activeCategory === cat.name.toLowerCase() ? 'border-blue-600 shadow-blue-300' : 'border-transparent'} hover:shadow-blue-400 hover:shadow-2xl`} 
          onClick={() => filteredItems(cat.name)} 
        >
          <div className='text-blue-500'>{cat.icon}</div>
          <div className='text-center text-blue-500 text-xl'>{cat.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Category
