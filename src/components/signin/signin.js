import { Link, useNavigate } from "react-router-dom";
import signImg from "./sign.jpg"
import sign2 from "./sign2.jpg"
import sign3 from "./sign3.jpg"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkSignIN } from "../../store/authSlice";

const SignIn = () => {



    const disaptch =  useDispatch()
    const navigate = useNavigate();


    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleSignIn = (e) => {
        e.preventDefault()
       const res =  disaptch(checkSignIN(user))
    
       if (res ===  true) {
        navigate("/");
       }else{
        navigate("/signup");
       }
    }
    return (

        <div className="flex w-full min-h-[100vh] item-start flex-wrap md:flex-nowrap">
            <div className="w-full md:w-[50%] border-2 max-h-[600px] border-white m-8 grid grid-cols-2 grid-rows-2  shadow-md rounded-lg">
                <img src={signImg} className="col-span-1 row-span-2 h-full pr-1" alt="signin"></img>
                <img src={sign2} className="col-span-1 row-span-1 h-full" alt="signin"></img>
                <img src={sign3} className="col-span-1 row-span-1 h-full pt-1" alt="signin"></img>
            </div>

            <div className="md:w-[50%] w-full">
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white uppercase">Sign in to your account</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.email} onChange={(e) => setUser({
                                        ...user, email: e.target.value
                                    })} />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-black-600 hover:text-red-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={user.password} onChange={(e) => setUser({
                                            ...user, password: e.target.value
                                        })} />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e) => handleSignIn(e)}>Sign in</button>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member ?
                            <Link href="#" className="font-semibold leading-6 text-red-600 hover:text-indigo-500 mx-4" to={"/signup"}>Sign Up</Link>
                        </p>
                    </div>
                </div>

            </div>



        </div>
    );
}

export default SignIn;