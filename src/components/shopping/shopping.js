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
             <Filter className="w-1/5"/>
            <div className="flex flex-wrap md:justify-start justify-center m-5  w-4/5">
               
                {globalState.data.clothes?.map((item) => (
                    <div className="block relative lg:w-1/6 md-w-1/4 w-[250px]  md:p-2 bg-gray-100 border-gray-300 border shadow-xl rounded-lg m-2" key={item.code}>
                        <div className="block relative h-48 overflow-hidden mt-4 cursor-pointer">
                            <img alt="ecommerce" className="object-center bg-cover w-[90%] h-[100%] block mx-auto" src={item.images} />
                        </div>
                        <div className="flex justify-between mt-4 md:mx-0 mx-4">
                            <div>
                                <h3 className="text-red-500 text-xs tracking-widest title-font mb-1 ">{item.brandName}</h3>
                                <h2 className="text-gray-600 title-font text-sm font-medium cursor-pointer hover:text-orange-800 ">{item.name}</h2>
                                <p className="mt-1">{item.price}<span className='text-green-800 text-xs'> USD</span></p>
                            </div>
                            {/* <button className="bg-red-500 mx-1 hover:bg-red-700 text-white text-xs w-[80px] h-[30px] rounded-lg" onClick={() => dispatch(addToCart(item))}>
                            Add to Cart
                        </button> */}
                            <div>
                                <button
                                    className="w-[80px] py-1 px-0.5 transition ease-in duration-200 text-xs rounded-full hover:bg-gray-800  hover:text-white border-[1px] border-gray-900 focus:outline-none mt-10"
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