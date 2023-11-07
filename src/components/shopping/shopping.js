import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'


const Shopping = ({ globalState }) => {

    return (
        <div className="container flex flex-wrap md:justify-between justify-center mx-auto my-5">
            {globalState.data.clothes?.map((item) => (
                <div className="block relative md:w-1/6 sm:w-full  md:p-2  border-gray-300 border shadow-sm rounded-sm m-2 bg-white" key={item.code}>
                    <div className="block relative h-48 overflow-hidden mt-4 cursor-pointer">
                        <img alt="ecommerce" className="object-center bg-cover w-[90%] h-[100%] block mx-auto" src={item.images[0].url} />
                    </div>
                    <div className="flex  justify-between mt-4">
                        <div>
                            <h3 className="text-red-500 text-xs tracking-widest title-font mb-1 ">{item.brandName}</h3>
                            <h2 className="text-gray-600 title-font text-sm font-medium cursor-pointer hover:text-orange-800 ">{item.name}</h2>
                            <p className="mt-1">{item.price}<span className='text-green-800 text-xs'> USD</span></p>
                        </div>
                        <div className="cursor-pointer z-20" >
                            <AiOutlineHeart size={22} className="hover:text-red-500 cursor-pointer focus:bg-red-600" />
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default Shopping;