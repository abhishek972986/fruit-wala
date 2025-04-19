import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoFastFood } from 'react-icons/io5';
import { FaSearch, FaShoppingCart, FaAppleAlt, FaLemon } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';

const Navbar = ({ searchbar, showcart, searchValue }) => {
  const [serachvalue, setsearch]=useState("")
  const data = useSelector((state) => state.users.items || []);
  const count = data.length;

  // Log props for debugging
  console.log('Navbar Props:', { searchbar, showcart, searchValue });

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full h-[70px] bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 flex justify-evenly items-center px-4 relative overflow-hidden shadow-lg z-1"
    >
      {/* Animated Border Effect */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent"
        animate={{
          borderColor: ['#fb923c', '#f472b6', '#60a5fa', '#fb923c'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Fruit Icons for Background Animation */}
      <motion.div
        className="absolute top-2 left-4 text-3xl text-orange-500 opacity-50"
        animate={{ y: [0, -10, 0], rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaLemon />
      </motion.div>
      <motion.div
        className="absolute top-2 right-4 text-3xl text-pink-500 opacity-50"
        animate={{ y: [0, 10, 0], rotate: [0, -360] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaAppleAlt />
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        className="w-[8%] h-full bg-white rounded-md shadow-2xl flex justify-center items-center z-10"
      >
        <IconButton sx={{ color: '#60a5fa' }}>
          <IoFastFood className="text-5xl" />
        </IconButton>
      </motion.div>

      {/* Search Bar */}
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        action="search"
        className="w-[60%] h-[80%] bg-white rounded-xl shadow-2xl flex justify-start items-center px-3 gap-2 z-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaSearch className="text-3xl text-blue-600" />
        </motion.div>
        <input
          type="text"
          className="bg-white text-xl rounded-2xl h-full w-full text-center outline-none placeholder-gray-500 text-gray-800 focus:ring-2 focus:ring-orange-500 z-10 pointer-events-auto"
          placeholder="Search your favorite juices..."
          value={searchValue || serachvalue}
          onChange={(e) => {
            console.log('Navbar Input Change:', e.target.value); // Log typed value
            console.log('onChange Event Fired:', e); 
            setsearch(e.target.value); // Update local state
            // Log event details
            if (searchbar) {
              console.log('Calling searchbar with value:', e.target.value);
              searchbar(e);
            } else {
              console.warn('searchbar prop is not defined');
            }
          }}
        />
      </motion.form>

      {/* Cart */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-[8%] h-full bg-white rounded-md shadow-2xl flex justify-center items-center cursor-pointer z-10"
        onClick={showcart}
      >
        <IconButton sx={{ color: '#60a5fa' }}>
          <FaShoppingCart className="text-3xl" />
        </IconButton>
        {count > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="absolute top-0.5 right-0.5 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-10"
          >
            {count}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;