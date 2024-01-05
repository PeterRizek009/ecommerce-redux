import { React, useEffect, useState } from 'react';
import { filterByPrice, filterBySearch } from '../../store/dataSlice'
import { useDispatch } from 'react-redux';
import sidelogo from './sidelogo.png'
import StarRating from '../StarRating/starrating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


const Filter = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update window width
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowWidth);

        // Cleanup: remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    const [toggle, setToggle] = useState(true)

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
    }, [dispatch, slider.value])



    useEffect(() => {
        setTimeout(() => {
            dispatch(filterBySearch(term))
        }, 1200)

    }, [dispatch, term])



    const filterSectionInMobile = () => {
        return (
            <>
                {toggle ?
                    <div className="flex items-center justify-center min-w-[25px] h-8 border-gray-300 shadow-md  mt-8 text-white bg-red-500  hover:bg-indigo-600 rounded text-sm cursor-pointer" onClick={() => setToggle(!toggle)}>
                        < FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                    </div >

                    :

                    <div className="flex items-center justify-center min-w-[25px] h-8 border-gray-300 shadow-md  mt-8 text-white bg-red-500  hover:bg-indigo-600 rounded text-sm cursor-pointer" onClick={() => setToggle(!toggle)}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                }

                {
                    toggle && (

                        <motion.div animate={{ marginLeft: toggle ? "5px" : "0px" }}>
                            <aside className="block w-[250px] min-h-[100vh]  shadow-sm" >

                                <div className='flex flex-wrap justify-center'>

                                    <div className="w-full md:mx-6 mx-2 my-10">
                                        <img alt="logo" className="object-center bg-cover block" src={sidelogo} />
                                    </div>
                                    <div className="w-full md:mx-6 mx-2 my-10 ">
                                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-md bg-white border-gray-300  hover:border-orange-500 border-2 overflow-hidden ">
                                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>
                                            <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 " type="text" id="search" placeholder="Search something.." value={term} onChange={(e) => setTerm(e.target.value)} />
                                        </div>
                                    </div>


                                    <div className="w-full md:mx-10 mx-4 my-10">
                                        <label htmlFor="default-range" className="block mb-2 text-md font-medium text-black dark:text-white">Price-USD</label>
                                        <input id="default-range" type="range" step={1} defaultValue={slider.value} className="range range-xs range-error dark:bg-white w-full" onChange={(e) => setSlider({ value: e.target.value })} />

                                        <div className="flex justify-start py-4">
                                            <input
                                                className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent  p-2.5  text-sm   text-blue-gray-700  outline outline-0 transition-all  focus:border-2 focus:border-orange-500  focus:outline-0"
                                                type="number" defaultValue={slider.value} value={slider.value}
                                            />
                                            <span className='mx-2 py-1'> - </span>
                                            <input
                                                className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent  p-2.5  text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-2 focus:border-orange-500  focus:outline-0 "
                                                type="number" value={slider.max}
                                            />
                                        </div>
                                    </div>

                                    <StarRating />


                                </div>

                            </aside >
                        </motion.div>
                    )
                }
            </>
        )

    }




    return (
        <>
            { windowWidth > 570 ? 
            (
                <aside className="block w-[250px] min-h-[100vh] z-50  shadow-sm md:mr-4 sm:mr-20" >

                    <div className='flex flex-wrap justify-center'>

                        <div className="w-full md:mx-6 mx-2 my-10">
                            <img alt="logo" className="object-center bg-cover  block" src={sidelogo} />
                        </div>
                        <div className="w-full md:mx-6 mx-2 my-10 ">
                            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-md bg-white border-gray-300  hover:border-orange-500 border-2 overflow-hidden ">
                                <div className="grid place-items-center h-full w-12 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 " type="text" id="search" placeholder="Search something.." value={term} onChange={(e) => setTerm(e.target.value)} />
                            </div>
                        </div>


                        <div className="w-full md:mx-6 mx-2 my-10">
                            <label htmlFor="default-range" className="block mb-2 text-md font-medium text-black dark:text-white">Price-USD</label>
                            <input id="default-range" type="range" step={1} defaultValue={slider.value} className="range range-xs range-error dark:bg-white w-full" onChange={(e) => setSlider({ value: e.target.value })} />

                            <div className="flex justify-start py-4">
                                <input
                                    className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent  p-2.5  text-sm   text-blue-gray-700  outline outline-0 transition-all  focus:border-2 focus:border-orange-500  focus:outline-0"
                                    type="number" defaultValue={slider.value} value={slider.value}
                                />
                                <span className='mx-2 py-1'> - </span>
                                <input
                                    className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent  p-2.5  text-sm  text-blue-gray-700 outline outline-0 transition-all  focus:border-2 focus:border-orange-500  focus:outline-0 "
                                    type="number" value={slider.max}
                                />
                            </div>
                        </div>

                        <StarRating />


                    </div>

                </aside >
            )
                :

                filterSectionInMobile()
            }
        </>

    );

}


export default Filter;