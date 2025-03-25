import React, { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { motion } from 'framer-motion';
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
            alert("Your cart is empty!");
            return;
        }

        const templateParams = {
            user_email: "abhishekdabas2005@gmail.com",
            message: data.map((item) => (
                `Food Name: ${item.food_name}, Quantity: ${quantities[item.id] || 1}, Price: ${item.price * (quantities[item.id] || 1)}`
            )).join("\n"),
        };

        emailjs
            .send(
                "service_i5w9y8x",
                "template_a4et9zb74",
                templateParams,
                "Ne2GiTp_qIQnVSYgU"
            )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Email sent successfully!");
            })
            .catch((err) => {
                console.error("FAILED...", err);
                alert("Failed to send email.");
            });
    };

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: cardshift ? '100%' : '0%' }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="w-[30%] h-full fixed right-0 top-0 bg-white shadow-lg z-10 p-6"
        >
            <div className='w-full flex justify-end'>
                <RxCross2
                    className='text-2xl font-bold text-blue-400 hover:bg-gray-200 rounded cursor-pointer'
                    onClick={hidecart}
                />
            </div>

            <div className='w-full h-[70%] flex flex-col justify-center items-center gap-2 overflow-y-scroll rounded-xl bg-gray-200 border mt-5'>
                {data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="w-full h-[150px] bg-white p-3 rounded-xl flex items-center gap-4 shadow-md"
                        >
                            <div className="w-[120px] h-[120px] flex-shrink-0 rounded-lg overflow-hidden border">
                                <img
                                    src={item.food_image}
                                    alt={item.food_name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col flex-grow justify-center">
                                <div className="text-xl font-bold text-gray-800">{item.food_name}</div>
                                <div className="text-lg font-semibold text-blue-600">
                                    ${item.price * (quantities[item.id] || 1)}
                                </div>

                                <span className="text-lg font-semibold text-black">
                                    <button 
                                        className='bg-red-300 p-1 text-xl rounded-l px-2' 
                                        onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) - 1)}
                                    >
                                        -
                                    </button>
                                    <button className='p-1 px-2'>{quantities[item.id] || 1}</button>
                                    <button 
                                        className='bg-green-300 text-xl p-1 rounded-r px-2' 
                                        onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) + 1)}
                                    >
                                        +
                                    </button>
                                </span>
                            </div>

                            <button 
                                className="bg-red-500 text-white p-2 rounded-lg font-bold hover:bg-red-600 transition-all" 
                                onClick={() => {deleteshow();removetheuser(item.id)}}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-500">No items in cart</div>
                )}
            </div>

            <div className="flex w-full h-[30%] flex-col gap-4 justify-center items-center">
                <div className='flex justify-around w-full text-blue-500 text-xl font-bold'>
                    <span>Total Items</span>
                    <span className='text-2xl font-extrabold text-blue-600'>{data.length}</span>
                </div>
                <div className='flex justify-around w-full text-blue-500 text-xl font-bold'>
                    <span>Total Price</span>
                    <span className='text-2xl font-extrabold text-blue-600'>${totalPrice.toFixed(2)}</span>
                </div>
                <div className='w-full flex justify-center'>
                    <button className='w-[80%] rounded bg-blue-500 text-white p-1.5 text-2xl font-bold cursor-pointer hover:bg-blue-400' onClick={sendEmail}>
                        Place Order
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Cartcard;
