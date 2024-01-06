import React from 'react';
import { addToCart } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../filter/filter';


const Shopping = ({ globalState }) => {

    const cartState = useSelector((state) => state.cart)

    const dispatch = useDispatch()


    const addNewItem = (item) => {
        if (!(cartState.cart).includes(item)) {
            dispatch(addToCart(item))
        } else {
            console.log("already exist in the cart");
        }
    }
    return (

        <div className='flex justify-start w-full'>
             <Filter/>
            <div className="flex flex-wrap justify-center py-4 md:w-4/5">
               
                {globalState.data.clothes?.map((item) => (
                    <div className="block relative xl:w-1/6 md:w-1/3 w-[200px] h-[350px] md:p-2 p-1 bg-gray-100 border-gray-300 dark:border-[#F39F5A] border shadow-md rounded-md md:m-2 m-1" key={item.code}>
                        <div className="block relative h-48 overflow-hidden mt-4 cursor-pointer">
                            <img alt="ecommerce" className="object-center bg-cover md:w-[70%] w-[80%] md:h-[100%] h-[80%] block mx-auto" src={item.images} />
                        </div>
                        <div className="flex md:justify-between justify-end flex-wrap md:mt-4  md:mx-0 mx-1">
                            <div className='w-full md:w-[60%]'>
                                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1 ">{item.brandName}</h3>
                                <h2 className="text-gray-600  title-font text-sm  font-medium cursor-pointer hover:text-orange-800 ">{item.name}</h2>
                                <p className="mt-1 dark:text-red-500">{item.price}<span className='text-green-800 text-xs'> USD</span></p>
                            </div>
                            {/* <button className="bg-red-500 mx-1 hover:bg-red-700 text-white text-xs w-[80px] h-[30px] rounded-lg" onClick={() => dispatch(addToCart(item))}>
                            Add to Cart
                        </button> */}
                            <div>
                                <button
                                    className="w-[80px] py-2 px-0.5 mt-3 rounded-md bg-indigo-500 text-xs text-blue-50 hover:bg-blue-600  dark:hover:bg-[#5c175c68] capitalize"
                                    onClick={() => addNewItem(item)}>Add
                                    to cart
                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    );
}

export default Shopping;