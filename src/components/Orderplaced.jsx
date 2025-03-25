import React, { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { motion } from 'framer-motion';

const Orderplaced = ({ cardshift, hidecart , toshow}) => {
  const [showOrder, setShowOrder] = useState(cardshift);

  useEffect(() => {
    if (cardshift) {
      setTimeout(() => {
        setShowOrder(false);
        hidecart();
      }, 3000);
    }
  }, [cardshift, hidecart]);

  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: cardshift ? '0%' : '-100%' }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="w-[20%] h-[60px] fixed right-0 top-0 bg-white shadow-lg z-10 p-6 flex justify-center items-center rounded z-20"
    >
      <div className='w-full flex justify-center gap-4 items-center'>
        <div className='text-2xl font-bold text-blue-500'>{
           toshow==1 ? 'Added to Cart' : 'Removed from Cart'
            }</div>
        <RxCross2
          className='text-2xl font-bold text-blue-400 hover:bg-gray-200 rounded cursor-pointer'
          onClick={hidecart}
        />
      </div>
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 3, ease: 'linear' }}
        className={`absolute bottom-0 left-0 h-1 ${toshow === 1 ? 'bg-green-500' : 'bg-red-500'}`}

      />
    </motion.div>
  );
};

export default Orderplaced;
