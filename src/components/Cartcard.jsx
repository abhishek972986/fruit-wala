import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';
import { FaAppleAlt, FaLemon } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import { Button, IconButton } from '@mui/material';
import emailjs from 'emailjs-com';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../slice/UserSlice';

const Cartcard = ({ hidecart, cardshift, deleteshow }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.items || []);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = data.reduce((acc, item) => {
      acc[item.id] = acc[item.id] || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [data]);

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, newQuantity) }));
  };

  const totalPrice = data.reduce((acc, item) => acc + (item.price * (quantities[item.id] || 1)), 0);

  const removetheuser = (id) => {
    dispatch(removeUser(id));
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const sendEmail = () => {
    if (data.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const templateParams = {
      user_email: 'abhishekdabas2005@gmail.com',
      message: data
        .map(
          (item) =>
            `Food Name: ${item.food_name}, Quantity: ${quantities[item.id] || 1}, Price: ${
              item.price * (quantities[item.id] || 1)
            }`
        )
        .join('\n'),
    };

    emailjs
      .send('service_i5w9y8x', 'template_a4et9zb74', templateParams, 'Ne2GiTp_qIQnVSYgU')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send email.');
      });
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: cardshift ? '100%' : '0%' }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="w-[30%] h-full fixed right-0 top-0 bg-white shadow-2xl z-10 p-6 rounded-l-3xl overflow-hidden"
    >
      {/* Animated Border Effect */}
      <motion.div
        className="absolute inset-0 border-4 border-transparent rounded-l-3xl"
        animate={{
          borderColor: ['#fb923c', '#f472b6', '#60a5fa', '#fb923c'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating Fruit Icons */}
      <motion.div
        className="absolute top-10 left-4 text-4xl text-orange-500 opacity-50"
        animate={{ y: [0, -15, 0], rotate: [0, 360] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaLemon />
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-4 text-4xl text-pink-500 opacity-50"
        animate={{ y: [0, 15, 0], rotate: [0, -360] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaAppleAlt />
      </motion.div>

      {/* Close Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full flex justify-end"
      >
        <IconButton
          onClick={hidecart}
          sx={{
            color: '#fb923c',
            '&:hover': { backgroundColor: 'rgba(251, 146, 60, 0.1)' },
          }}
        >
          <RxCross2 className="text-2xl" />
        </IconButton>
      </motion.div>

      {/* Cart Items */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full h-[70%] flex flex-col gap-2 overflow-y-scroll rounded-xl bg-gray-100 p-4 mt-5"
      >
        {data.length > 0 ? (
          data.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + item.id * 0.1, duration: 0.5 }}
              className="w-full h-[150px] bg-white p-3 rounded-xl flex items-center gap-4 shadow-md"
            >
              {/* Item Image */}
              <div className="w-[120px] h-[120px] flex-shrink-0 rounded-lg overflow-hidden border border-orange-200">
                <img
                  src={item.food_image}
                  alt={item.food_name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Item Details */}
              <div className="flex flex-col flex-grow justify-center">
                <div className="text-xl font-bold text-gray-800">{item.food_name}</div>
                <div className="text-lg font-semibold text-orange-500">
                  ${item.price * (quantities[item.id] || 1)}
                </div>

                {/* Quantity Controls */}
                <span className="text-lg font-semibold text-black flex items-center gap-1">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) - 1)}
                    sx={{
                      backgroundColor: '#f472b6',
                      minWidth: '32px',
                      padding: '4px',
                      '&:hover': { backgroundColor: '#ec4899' },
                    }}
                  >
                    -
                  </Button>
                  <span className="px-3">{quantities[item.id] || 1}</span>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) + 1)}
                    sx={{
                      backgroundColor: '#fb923c',
                      minWidth: '32px',
                      padding: '4px',
                      '&:hover': { backgroundColor: '#f97316' },
                    }}
                  >
                    +
                  </Button>
                </span>
              </div>

              {/* Delete Button */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    deleteshow();
                    removetheuser(item.id);
                  }}
                  sx={{
                    backgroundColor: '#ef4444',
                    '&:hover': { backgroundColor: '#dc2626' },
                  }}
                >
                  Delete
                </Button>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-center"
          >
            No items in cart
          </motion.div>
        )}
      </motion.div>

      {/* Cart Summary and Place Order */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full h-[30%] flex flex-col gap-2 justify-center items-center"
      >
        <div className="flex justify-between w-full text-pink-500 text-xl font-bold px-4">
          <span>Total Items</span>
          <span className="text-2xl font-extrabold text-orange-500">{data.length}</span>
        </div>
        <div className="flex justify-between w-full text-pink-500 text-xl font-bold px-4">
          <span>Total Price</span>
          <span className="text-2xl font-extrabold text-orange-500">${totalPrice.toFixed(2)}</span>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-4 mt-1">
          <Button
            fullWidth
            variant="contained"
            startIcon={<BsCart3 />}
            onClick={sendEmail}
            sx={{
              background: 'linear-gradient(45deg, #fb923c, #f472b6)',
              padding: '12px',
              borderRadius: '12px',
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1.2rem',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                background: 'linear-gradient(45deg, #f97316, #ec4899)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            Place Order
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cartcard;