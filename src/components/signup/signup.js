import React, { useState } from 'react';
import {addNewUser} from '../../store/authSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const SignUp = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
       dispatch(addNewUser(user))
       navigate("/signin")
    } 
   
    return (
        <div className="flex w-full min-h-[100vh] justify-center dark:text-white">
            <div>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight ">Sign Up , it's quick and easy </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div className='flex'>
                                <div className='mr-2 w-[75%]'>
                                    <label htmlFor="text" className="block text-sm font-medium leading-6">First name </label>
                                    <div className="mt-2">
                                        <input id="firstname" name="firstname" type="text" required
                                            className="block  rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={user.firstName}
                                            onChange={(e) => {
                                            setUser({
                                                ...user, firstName : e.target.value
                                            })
                                            }} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="text" className="block text-sm font-medium leading-6 ">Last name </label>
                                    <div className="mt-2">
                                        <input id="lastname" name="lastname" type="text" 
                                        required className="block  rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={user.lastName}
                                        onChange={(e) => {
                                        setUser({
                                            ...user, lastName : e.target.value
                                        })
                                        }}/>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 ">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" 
                                    autoComplete="email" required className="block w-full rounded-md border-0 py-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={user.email}
                                    onChange={(e) => {
                                    setUser({
                                        ...user, email : e.target.value
                                    })
                                    }}/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6  ">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" 
                                    autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                    value={user.password}
                                    onChange={(e) => {
                                    setUser({
                                        ...user, password : e.target.value
                                    })
                                    }}/>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                                onClick={(e) => handleSubmit(e)}>Sign up</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

         


        </div>
    );
}

export default SignUp;