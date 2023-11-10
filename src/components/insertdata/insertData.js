import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertData } from '../../store/dataSlice';



const InsertData = () => {

    const { isLoggedIn } = useSelector((state) => state.auth)
    const name = useRef(null);
    const code = useRef(null);

    const Dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            code: code.current.value,
            name: name.current.value,

        }
        Dispatch(insertData(data))
    }

    return (
        <form className="container mx-auto w-1/3  my-8">
            <div className="md:flex md:justify-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-code">
                        Code
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-code" disabled={!isLoggedIn} type="number" defaultValue="Enter the item code" ref={code} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-name">
                        Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" disabled={!isLoggedIn} id="inline-name" type="text" placeholder="item name" ref={name} />
                </div>
            </div>

            <div className="md:flex md:items-center">
                <div className="md:w-1/3" />
                <div className="md:w-2/3">
                    <button className="shadow bg-red-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" disabled={!isLoggedIn} onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </form>

    );
}

export default InsertData;