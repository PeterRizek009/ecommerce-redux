import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr'
import { deletFromCart, increase, decrease } from '../../store/cartSlice';

const Cart = () => {


    const cartState = useSelector((state) => state.cart)

    

    const dispatch = useDispatch()

    const CounterHandler =  useCallback((type, itemID) => {
        if (type === 'increase') {
            dispatch(increase(itemID))
     
        }
        else {
            dispatch(decrease(itemID))
           
        }
    } ,[dispatch])

    // const CounterHandler = (type, itemID) => {
    //     if (type === 'increase') {
    //         dispatch(increase(itemID))
     
    //     }
    //     else {
    //         dispatch(decrease(itemID))
           
    //     }

    // }




    const getTotal = () => {
        const result = ((cartState.cart)?.map((item) =>  (item.count * item.price)))
      
        return (Number(result.reduce((sub , item) => sub += item)).toFixed(2))
    }



 






    return (
        <div classname="relative my-5">

            <div className='mx-auto max-w-5xl justify-between px-6 md:flex md:space-x-6 xl:px-0 mt-10'>
                <div className="md:w-2/3 w-full">
                    {cartState.cart?.map((item) => (

                        <div className="flex justify-between mb-6 rounded-lg border bg-white p-4 shadow-md sm:justify-start w-full" key={item.code}>

                            <div className="block relative md:h-[200px] overflow-hidden cursor-pointer">
                                <img alt="ecommerce" className="w-full rounded-lg sm:w-40" src={item.images} />
                            </div>


                            <div className="flex flex-row w-full justify-between flex-wrap md:flex-nowrap">
                                {/* price   */}
                                <div className='w-[200px] px-4 py-1'>
                                    <h2 className="text-gray-600 title-font text-lg font-medium cursor-pointer hover:text-orange-800 ">{item.name}</h2>
                                    <h3 className="text-red-500 text-sm tracking-widest title-font mb-1 ">{item.brandName}</h3>
                                </div>


                                <div className="flex flex-col justify-normal space-y-6 items-center  w-[200px] ">
                                    <div className="flex items-center border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-red-500 hover:text-blue-50" onClick={() => CounterHandler('decrease', item.code)}> - </span>
                                        <h1 className="h-8 w-8 border pt-2 bg-white text-center text-xs outline-none">{item.count}</h1>
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-red-500 hover:text-blue-50" onClick={() => CounterHandler('increase', item.code)} > + </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm">Price : {item.price}
                                            <span className='text-green-800 text-xs'>USD</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm"> Total : {Number(item.price * item.count).toFixed(2)}
                                            <span className='text-green-800 text-xs'> USD</span>
                                        </p>
                                    </div>
                                    <div>
                                        <GrClose size={22} className='ms-4 cursor-pointer' onClick={() => dispatch(deletFromCart(item))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {cartState.cart.length > 0 && (
                    <div className="block h-full rounded-lg border bg-white p-6 shadow-md  md:w-1/3 mx-auto">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                           <p className="text-gray-700">{getTotal()}</p> 
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Free Shipping</p>

                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className>
                                <p className="mb-1 text-lg font-bold">{getTotal()} USD</p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div>
                )}

            </div>
        </div>

        // <div className="container flex flex-wrap md:justify-start justify-center mx-auto my-5">
        //     {cartState.cart?.map((item) => (
        //         <div className="block relative lg:w-1/6 md-w-1/4 w-[250px]  md:p-2 bg-gray-100 border-gray-300 border shadow-xl rounded-lg m-2" key={item.code}>
        //             <div className="block relative h-48 overflow-hidden mt-4 cursor-pointer">
        //                 <img alt="ecommerce" className="object-center bg-cover w-[90%] h-[100%] block mx-auto" src={item.images} />
        //             </div>
        //             <div className="flex  justify-between mt-4">
        //                 <div>
        //                     <h3 className="text-red-500 text-xs tracking-widest title-font mb-1 ">{item.brandName}</h3>
        //                     <h2 className="text-gray-600 title-font text-sm font-medium cursor-pointer hover:text-orange-800 ">{item.name}</h2>
        //                     <p className="mt-1">{item.price}<span className='text-green-800 text-xs'> USD</span></p>
        //                 </div>
        //                 <div>
        //                     <MdDeleteForever size={30} className="hover:text-red-500 cursor-pointer focus:bg-red-600 mx-4 mt-8" onClick={(arg) => dispatch(deletFromCart(item))} />
        //                 </div>
        //             </div>
        //         </div>

        //     ))}
        // </div>
    );
}

export default Cart;