import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInOut } from '../../store/authSlice';



const Navbar = () => {

    const dispatch = useDispatch()

    const { isLoggedIn } = useSelector((state) => state.auth)
    const cartState = useSelector((state) => state.cart)

    return (

        <div className="flex flex-wrap items-center">
            <section className="relative mx-auto">
                {/* navbar */}
                <nav className="flex justify-between  text-gray-900 w-screen shadow-md">
                    <div className="px-5 xl:px-12 py-4 flex w-full items-center">
                        <Link className="text-3xl font-bold font-heading" to={"/"}>
                            Logo Here.
                        </Link>
                        {/* Nav Links */}
                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                            <li>
                                <Link className="hover:text-red-400" to={"/"}>Home</Link >
                            </li>
                            <li><Link className="hover:text-red-400" to={"/insert"}>Insert new Data</Link >
                            </li>
                        </ul>
                        {/* Header Icons */}
                        <div className="hidden xl:flex items-center space-x-5">
                            <a className="hover:text-gray-200" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </a>
                            <Link className="flex items-center hover:text-gray-200" to={"/cart"}>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="flex absolute -mt-5 ml-4">
                                    <div className='relative block rounded-lg py-1/6 px-1 bg-red-700 text-white text-center text-xs'>{cartState.cart.length}</div>
                                </span>
                            </Link>
                            {/* Sign In / Register      */}
                            <button className="bg-red-500  mx-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={() => dispatch(logInOut())}>{isLoggedIn === true ?
                                "Sign out"
                                :
                                "Sign in"}</button>
                        </div>
                    </div>
                    {/* Responsive navbar */}
                    {/* <a className="xl:hidden flex mr-6 items-center" href="#">
                        <Link className="flex items-center hover:text-gray-200" to={"/cart"}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="flex absolute -mt-5 ml-4">
                                <div className='relative block rounded-lg py-1/6 px-1 bg-red-700 text-white text-center text-xs'>{cartState.cart.length}</div>
                            </span>
                        </Link>
                    </a>
                    <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a> */}
                </nav>
            </section>
        </div>


    );
}

export default Navbar;