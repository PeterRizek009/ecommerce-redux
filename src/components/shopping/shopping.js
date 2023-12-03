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
                    <div className="block relative xl:w-1/6 md:w-1/3 w-[200px]  h-[340px] md:p-2 p-1 bg-gray-100 border-gray-300 border shadow-xl rounded-lg md:m-2 m-1" key={item.code}>
                        <div className="block relative h-48 overflow-hidden mt-4 cursor-pointer">
                            <img alt="ecommerce" className="object-center bg-cover md:w-[90%] w-[80%] md:h-[100%] h-[80%] block mx-auto" src={item.images} />
                        </div>
                        <div className="flex md:justify-between justify-start flex-wrap md:mt-4 my-1 md:mx-0 mx-1">
                            <div className='w-full md:w-[60%]'>
                                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1 ">{item.brandName}</h3>
                                <h2 className="text-gray-600  title-font text-sm  font-medium cursor-pointer hover:text-orange-800 ">{item.name}</h2>
                                <p className="mt-1 dark:text-red-600">{item.price}<span className='text-green-800 text-xs'> USD</span></p>
                            </div>
                            {/* <button className="bg-red-500 mx-1 hover:bg-red-700 text-white text-xs w-[80px] h-[30px] rounded-lg" onClick={() => dispatch(addToCart(item))}>
                            Add to Cart
                        </button> */}
                            <div>
                                <button
                                    className="w-[70px] py-1 duration-200 text-xs dark:text-red-600 rounded hover:bg-gray-800  hover:text-white border-[1px] border-gray-900 focus:outline-none md:mt-10 my-2"
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