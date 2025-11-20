import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { deletFromCart, increase, decrease } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

    const cartState = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const CounterHandler = useCallback((type, itemID) => {
        if (type === 'increase') {
            dispatch(increase(itemID));
        } else {
            dispatch(decrease(itemID));
        }
    }, [dispatch]);

    const getTotal = () => {
        if (cartState.cart.length === 0) return "0.00";

        const subtotal = cartState.cart
            .map(item => item.count * item.price)
            .reduce((acc, val) => acc + val, 0);

        return subtotal.toFixed(2);
    };

    return (
        <div className="relative my-5">
            {cartState.cart.length === 0 ? (

                <div className="mt-20 min-h-[100vh] flex flex-col items-center justify-center">
                    <img 
                        src="https://i.imgur.com/NxmwdzX.png" 
                        width={130} height={130} 
                        alt="empty cart"
                    />
                    <h3 className="text-xl font-semibold my-4">Your Cart is Empty</h3>
                    <p className="text-gray-600 mb-4">Add something to make me happy 😊</p>
                    <Link 
                        to="/" 
                        className="mt-6 rounded-md bg-red-500 py-2 px-4 font-medium text-white hover:bg-red-600"
                    >
                        Continue Shopping
                    </Link>
                </div>

            ) : (

                <div className="mx-auto max-w-5xl justify-between px-6 md:flex md:space-x-6 xl:px-0 mt-10 min-h-[100vh]">

                    {/* LEFT SIDE — ITEMS */}
                    <div className="md:w-2/3 w-full">

                        {cartState.cart.map(item => (
                            <div 
                                key={item.id}
                                className="flex justify-between mb-6 rounded-lg border bg-white p-4 shadow-md sm:justify-start w-full"
                            >
                                
                                {/* IMAGE */}
                                <div className="block relative md:h-[200px] overflow-hidden cursor-pointer sm:w-40 w-28">
                                    <img 
                                        alt={item.title}
                                        className="w-full rounded-lg h-full object-contain"
                                        src={item.images[0]} 
                                    />
                                </div>

                                {/* RIGHT SIDE CONTENT */}
                                <div className="flex flex-row w-full justify-between flex-wrap md:flex-nowrap">

                                    {/* Title + Brand */}
                                    <div className="w-[200px] px-4 py-1">
                                        <h2 className="text-gray-800 text-lg font-semibold hover:text-orange-800">
                                            {item.title}
                                        </h2>
                                        <h3 className="text-red-500 text-sm tracking-widest mt-1">
                                            {item.brand}
                                        </h3>
                                    </div>

                                    {/* Quantity + Prices */}
                                    <div className="flex flex-col justify-between items-center space-y-6 w-[200px] py-2">

                                        {/* Counter */}
                                        <div className="flex items-center">
                                            <span
                                                className="cursor-pointer rounded-l bg-gray-300 py-1 px-3 hover:bg-red-500 hover:text-white"
                                                onClick={() => CounterHandler('decrease', item.id)}
                                            >
                                                -
                                            </span>

                                            <span className="h-8 w-8 border flex items-center justify-center bg-white text-sm">
                                                {item.count}
                                            </span>

                                            <span
                                                className="cursor-pointer rounded-r bg-gray-300 py-1 px-3 hover:bg-red-500 hover:text-white"
                                                onClick={() => CounterHandler('increase', item.id)}
                                            >
                                                +
                                            </span>
                                        </div>

                                        <p className="text-sm">
                                            Price: {item.price}
                                            <span className="text-green-700 text-xs"> USD</span>
                                        </p>

                                        <p className="text-sm">
                                            Total: {(item.count * item.price).toFixed(2)}
                                            <span className="text-green-700 text-xs"> USD</span>
                                        </p>

                                        {/* Delete */}
                                        <GrClose 
                                            size={22} 
                                            className="cursor-pointer hover:text-red-500"
                                            onClick={() => dispatch(deletFromCart(item.id))}
                                        />

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* RIGHT SIDE — SUMMARY */}
                    <div className="block h-full rounded-lg border bg-white p-6 shadow-md text-gray-700 md:w-1/3 mx-auto">
                        <div className="mb-2 flex justify-between">
                            <p>Subtotal</p>
                            <p>{getTotal()} USD</p>
                        </div>

                        <div className="flex justify-between">
                            <p>Shipping</p>
                            <p className="font-semibold text-green-600">FREE</p>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div>
                                <p className="text-lg font-bold">{getTotal()} USD</p>
                                <p className="text-sm text-gray-600">Including VAT</p>
                            </div>
                        </div>

                        <button className="mt-6 w-full rounded-md bg-indigo-500 py-2 font-medium text-white hover:bg-indigo-600">
                            Check Out
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Cart;
