import React from 'react';
import { motion } from 'framer-motion';
import { FaAppleAlt, FaLemon } from 'react-icons/fa';
import Categories from './categorydata';

const Category = ({ filteredItems, activeCategory }) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-4 mt-2.5 bg-gradient-to-tr from-yellow-300 via-pink-300 to-blue-300 relative overflow-hidden py-6">
      {/* Floating Fruit Icons for Background Animation */}
      <motion.div
        className="absolute top-4 left-8 text-4xl text-orange-500 opacity-50"
        animate={{ y: [0, -15, 0], rotate: [0, 360] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaLemon />
      </motion.div>
      <motion.div
        className="absolute top-4 right-8 text-4xl text-pink-500 opacity-50"
        animate={{ y: [0, 15, 0], rotate: [0, -360] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaAppleAlt />
      </motion.div>

      {Categories.map((cat) => (
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: cat.id * 0.1 }}
          whileHover={{ scale: 1.1, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          className={`w-[150px] h-[150px] bg-white rounded-xl shadow-md flex flex-col justify-center items-center cursor-pointer relative overflow-hidden transition-all duration-300
            ${
              activeCategory === cat.name.toLowerCase()
                ? 'border-4 border-orange-500 shadow-orange-300'
                : 'border-4 border-transparent'
            } hover:shadow-2xl hover:border-orange-500`}
          onClick={() => filteredItems(cat.name)}
        >
          {/* Animated Border Effect */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent rounded-xl"
            animate={{
              borderColor: ['#fb923c', '#f472b6', '#60a5fa', '#fb923c'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-orange-500 text-4xl"
          >
            {cat.icon}
          </motion.div>

          {/* Category Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-pink-500 text-xl font-semibold"
          >
            {cat.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Category;