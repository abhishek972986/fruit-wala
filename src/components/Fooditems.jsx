import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaAppleAlt, FaLemon } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { Button } from '@mui/material';

const Fooditems = ({ fooditems, openorder }) => {
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-evenly gap-5 mt-5 min-h-[80vh] bg-gradient-to-tr from-yellow-300 via-pink-300 to-blue-300 relative overflow-hidden">
      {/* Floating Fruit Icons for Background Animation */}
      <motion.div
        className="absolute top-10 left-10 text-4xl text-orange-500 opacity-50"
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaLemon />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-4xl text-pink-500 opacity-50"
        animate={{ y: [0, 20, 0], rotate: [0, -360] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaAppleAlt />
      </motion.div>

      {fooditems.map((food) => (
        <motion.div
          key={food.id}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: food.id * 0.1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
          className="w-[350px] h-[500px] rounded-xl bg-white flex flex-col gap-4 justify-center items-center p-4 relative overflow-hidden mt-2"
        >
          {/* Animated Border Effect */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent rounded-xl"
            animate={{
              borderColor: ['#fb923c', '#f472b6', '#60a5fa', '#fb923c'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Food Image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full h-[60%]"
          >
            <img
              src={food.food_image}
              alt={food.food_name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Food Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl w-full text-start px-7 font-bold text-gray-800"
          >
            {food.food_name}
          </motion.div>

          {/* Price & Type */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-between w-full px-7"
          >
            <div className="text-orange-500 font-bold text-xl">RS /~ {food.price}</div>
            <div className="text-pink-500 font-extrabold text-xl flex items-center gap-2">
              <FaLeaf /> {food.food_type}
            </div>
          </motion.div>

          {/* Add to Cart Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-7"
          >
            <Button
              fullWidth
              variant="contained"
              startIcon={<BsCart3 />}
              onClick={() => openorder(food.id)}
              sx={{
                background: 'linear-gradient(45deg, #fb923c, #f472b6)',
                padding: '12px',
                borderRadius: '12px',
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #f97316, #ec4899)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              Add to Cart
            </Button>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Fooditems;