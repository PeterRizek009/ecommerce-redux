import { React, useEffect, useState } from 'react';
import {filterByPrice , filterBySearch} from '../../store/dataSlice'
import { useDispatch } from 'react-redux';
import sidelogo from './sidelogo.png'


const Filter = () => {


    const [toggle, setToggle] = useState(false)

    const [term, setTerm] = useState(' ')
    
    const [slider, setSlider] = useState({
        max: 500,
        min: 0,
        value: 0,
        label: ''
    });


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterByPrice(slider.value))
      

    },[dispatch, slider.value])


    
    useEffect(() => {
        setTimeout(() => {
            dispatch(filterBySearch(term))
        },1200)
       
      
  
    },[dispatch , term])


    // const onSlide = (e) => {
    //     console.log(e.target);
    //     // setSlider(slider.value);
    // }

    const handleToggle = () => setToggle(!toggle)

    // const filters = [
    //     {
    //         id: 'color',
    //         name: 'Color',
    //         options: [
    //             { value: 'white', label: 'White', checked: false },
    //             { value: 'beige', label: 'Beige', checked: false },
    //             { value: 'blue', label: 'Blue', checked: true },
    //             { value: 'brown', label: 'Brown', checked: false },
    //             { value: 'green', label: 'Green', checked: false },
    //             { value: 'purple', label: 'Purple', checked: false },
    //         ],
    //     },
    //     {
    //         id: 'category',
    //         name: 'Category',
    //         options: [
    //             { value: 'new-arrivals', label: 'New Arrivals', checked: false },
    //             { value: 'sale', label: 'Sale', checked: false },
    //             { value: 'travel', label: 'Travel', checked: true },
    //             { value: 'organization', label: 'Organization', checked: false },
    //             { value: 'accessories', label: 'Accessories', checked: false },
    //         ],
    //     },
    //     {
    //         id: 'size',
    //         name: 'Size',
    //         options: [
    //             { value: '2l', label: '2L', checked: false },
    //             { value: '6l', label: '6L', checked: false },
    //             { value: '12l', label: '12L', checked: false },
    //             { value: '18l', label: '18L', checked: false },
    //             { value: '20l', label: '20L', checked: false },
    //             { value: '40l', label: '40L', checked: true },
    //         ],
    //     },
    // ]




    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" onClick={() => handleToggle()} type="button" className="absolute top-20 p-1 ms-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside className="md:block w-[300px] min-h-[100vh] z-50 border-r-2 border-gray-200 shadow-md hidden" >
                <button className='absolute left-[250px] sm:hidden my-4'>
                    Close
                </button>

                <div className='flex flex-wrap justify-center'>

                    <div className="w-full mx-6 my-10">
                          <img alt="logo" className="object-center bg-cover  block" src={sidelogo} />
                    </div>
                    <div className="w-full mx-6 my-10">
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white border-gray-300 border-2 overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search something.."  value={term}   onChange={(e) => setTerm(e.target.value)}/>
                        </div>
                    </div>

                  
                    <div className="w-full mx-10 my-10">
                        <label htmlFor="default-range" className="block mb-2 text-md font-medium text-black">Price-USD</label>
                        <input id="default-range" type="range" step={1} defaultValue={slider.value} className="range range-xs range-error w-full" onChange={(e) =>  setSlider({value : e.target.value})}/>

                        <div className="flex justify-start py-4">
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent  p-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " type="number"  defaultValue={slider.value} value={slider.value}
                            />
                            <span className='mx-2 py-1'> - </span>
                            <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent  p-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" " type="number"  value={slider.max}
                            />
                        </div>
                    </div>



                </div>

            </aside >

        </>
    );

}


export default Filter;