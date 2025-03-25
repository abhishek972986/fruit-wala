import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import Fooditems from './components/Fooditems'
import food_items from './food'
import Cartcard from './components/Cartcard'
import Orderplaced from './components/Orderplaced'
import { useDispatch } from 'react-redux'
import { addUser } from './slice/UserSlice'

const Home = () => {
  const [fooditems, setItems] = useState(food_items)
  const [activeCategory, setActiveCategory] = useState('all') // ✅ Track active category
  const [cartcard, setcartcard]= useState(false)
  const [placeorder, setorder]= useState(false)
  const [count , setcount]= useState(0)
const dispatch = useDispatch()
const [toshow, setshow]=useState(0)
  
  const closeorder=()=>{
    setorder(false)

  }
  const deleteshow=()=>{
    setorder(true)
    setshow(0)
  }
  const openorder=(id)=>{
    setorder(true)
    setTimeout(() => {
      setorder(false)
    }, 3000);
    setcount(count+1)
    setshow(1)
const item = food_items.find((item) => item.id === id)
dispatch(addUser(item))
  }
  const showcart=()=>{
    setcartcard(true)
  }
  const hidecart=()=>{
    setcartcard(false)
  }

  const searchFilter = (e) => {
    const query = e.target.value.toLowerCase()
    const filteredItems = food_items.filter(
      (item) =>
        item.food_name.toLowerCase().includes(query) ||
        item.food_category.toLowerCase().includes(query) ||
        item.food_type.toLowerCase().includes(query)
    )
    setItems(filteredItems)
  }

  const filterByCategory = (value) => {
    const query = value.toLowerCase()
    setActiveCategory(query) // ✅ Update active category state

    if (query === 'all') {
      setItems(food_items)
    } else {
      const filteredItems = food_items.filter((item) =>
        item.food_category.toLowerCase().includes(query)
      )
      setItems(filteredItems)
    }
  }

  return (
    <div className='bg-gray-400 w-full h-full'>
      <Navbar searchbar={searchFilter} showcart={showcart} cardshift={cartcard} count={count}/>
      <Category filteredItems={filterByCategory} activeCategory={activeCategory} /> {/* ✅ Pass activeCategory */}
    {cartcard&&  <Cartcard hidecart={hidecart} deleteshow={deleteshow}/>}
   {placeorder&& <Orderplaced hidecart={closeorder} cardshift={placeorder} toshow={toshow}/>}
      <Fooditems fooditems={fooditems} openorder={openorder} />
    </div>
  )
}

export default Home
