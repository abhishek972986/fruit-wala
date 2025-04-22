import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaAppleAlt, FaLemon } from 'react-icons/fa';
import { TextField, Button, InputAdornment } from '@mui/material';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic (e.g., check credentials)
    if (email && password) {
      console.log('Login Successful:', { email, password });
      onLogin(); // Trigger the login state change
    } else {
      console.log('Please fill in all fields');
    }
  };

  // Internet image link from Unsplash (vibrant juice image)
  const juiceImage = 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';

  return (
    <div className="flex items-center justify-center min-h-screen px-4 relative overflow-hidden">
      {/* Floating Fruit Icons */}
      <motion.div
        className="absolute top-10 left-10 text-5xl text-yellow-500"
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaLemon />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-5xl text-pink-500"
        animate={{ y: [0, 20, 0], rotate: [0, -360] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaAppleAlt />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full overflow-hidden border-4 border-orange-400"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${juiceImage})` }}
        ></div>
        <div className="relative z-10">
          {/* Heading */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500 mb-6"
          >
            Ait Fruit Shop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-gray-700 mb-8 font-semibold"
          >
            Sip the sweetness, login now!
          </motion.p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-6"
            >
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaUser className="text-orange-500" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover fieldset': { borderColor: '#fb923c' },
                    '&.Mui-focused fieldset': { borderColor: '#fb923c' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#fb923c' },
                }}
              />
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-8"
            >
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock className="text-orange-500" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover fieldset': { borderColor: '#fb923c' },
                    '&.Mui-focused fieldset': { borderColor: '#fb923c' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#fb923c' },
                }}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                fullWidth
                variant="contained"
                type="submit"
                startIcon={<FaAppleAlt />}
                sx={{
                  background: 'linear-gradient(45deg, #fb923c, #f472b6)',
                  padding: '14px',
                  borderRadius: '16px',
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
                Login
              </Button>
            </motion.div>
          </form>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 text-center"
          >
            <a href="#" className="text-orange-500 hover:underline text-sm font-medium">
              Forgot Password?
            </a>
            <p className="mt-2 text-gray-600 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-pink-500 hover:underline font-medium">
                Sign Up
              </a>
            </p>
          </motion.div>
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent rounded-3xl"
          animate={{
            borderColor: ['#fb923c', '#f472b6', '#60a5fa', '#fb923c'],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </div>
  );
};

export default Login;