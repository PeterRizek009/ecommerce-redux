import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInOut } from '../../store/authSlice';
import { toggleDarkMode } from '../../store/darkModeSlice'
import logo from './Logo.png'
import logoWhite from './logoWhite.png'
import { Fade as Hamburger } from "hamburger-react"


const Navbar = () => {

    const dispatch = useDispatch()



    // const { isLoggedIn } = useSelector((state) => state.auth)
    const cartState = useSelector((state) => state.cart)


    const darkModeState = useSelector((state) => state.darkmode)


    const [active, setActive] = useState(false);



    const showMenu = () => {
        setActive(!active)
    }

    const links = ['Home', 'About', 'Coupons', 'Help']



    return (

        <div>

            {/* navbar */}
            <nav className="flex justify-between text-gray-900 dark:text-white w-full box-border bg-[#F1EAFF] shadow-sm dark:bg-[#22092C] min-w-[480px]">

                <div className="px-1 xl:px-12 py-4 flex w-full  items-center">
                    <Link className="text-3xl font-bold font-heading" to={"/"}>
                        <img alt="logo" className="object-center h-[50px]  block" src={darkModeState === true ? logoWhite : logo} />
                    </Link>
                    {/* Nav Links */}
                    <ul className="hidden md:flex px-2 mx-auto font-semibold font-heading space-x-2">
                        <li>
                            <Link className="hover:text-red-400" to={"/"}>Home  <span className='mx-4'> | </span></Link >
                        </li>
                        <li>
                            <Link className="hover:text-red-400" to={"/"}>About <span className='mx-4'> | </span></Link >
                        </li>
                        <li>
                            <Link className="hover:text-red-400" to={"/"}>Coupons <span className='mx-4'> | </span></Link >
                        </li>
                        <li>
                            <Link className="hover:text-red-400" to={"/"}>Help <span className='mx-4'> | </span></Link >
                        </li>
                        {logInOut === true ?

                            <li><Link className="hover:text-red-400" to={"/insert"}>Insert new Data</Link >
                            </li>
                            :
                            <></>

                        }

                    </ul>
                    {/* Header Icons */}
                    <div className="hidden xl:flex items-center space-x-5">
                        <Link className="flex items-center hover:text-gray-200" to={"/cart"}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartState.cart.length > 0 && (
                                <span className="flex absolute -mt-5 ml-4">
                                    <div className='relative block rounded-lg py-1/6 px-1 bg-red-700 text-white text-center text-xs'>{cartState.cart.length}</div>
                                </span>
                            )}
                        </Link>

                        {/* Sign In / Register      */}
                        <Link className="lg:mt-2 xl:mt-0 flex-shrink-0  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded uppercase inline-flex" to={'/signin'}>
                            Sign in
                        </Link>
                    </div>




                </div>
                {/* Responsive navbar */}

                {/* <Link className="flex items-center hover:text-gray-200 mx-4" to={"/cart"}>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartState.cart.length > 0 && (
                        <span className="flex absolute -mt-5 ml-4">
                            <div className='relative block rounded-lg py-1/6 px-1 bg-red-700 text-white text-center text-xs'>{cartState.cart.length}</div>
                        </span>
                    )}
                </Link> */}
                <div className='my-auto mx-8 block scale-125'>
                    {darkModeState ?
                        <label className="flex cursor-pointer gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => dispatch(toggleDarkMode())}>
                                <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                        </label>
                        :
                        <label className="flex cursor-pointer gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => dispatch(toggleDarkMode())}>
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    }




                </div>



                <div className="md:hidden self-center mr-12 scale-75 dark:bg-slate-300 dark:rounded-md" >
                    <Hamburger color='black' onToggle={showMenu} />
                </div>




                <ul className={active === true ? "absolute mx-auto h-[250px] top-[70px] z-50  w-full bg-[#F1EAFF] flex flex-col justify-start  p-3 space-y-4 dark:bg-[#22092C] " : "hidden"}>
                    {links.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <Link className="nav-link ml-4 uppercase hover:text-red-400" aria-current="page" to={`/${link}`}>{link}</Link>
                        </li>
                    ))}


                    <li className="nav-item">
                        <Link className="flex items-center ml-4 hover:text-gray-200" to={"/cart"}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartState.cart.length > 0 && (
                                <span className="flex absolute -mt-5 ml-4">
                                    <div className='relative block rounded-lg py-1/6 px-1 bg-red-700 text-white text-center text-xs'>{cartState.cart.length}</div>
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>

            </nav>

        </div >


    );
}

export default Navbar;