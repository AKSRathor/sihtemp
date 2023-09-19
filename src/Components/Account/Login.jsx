import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const beforeLog = useRef()
    const otpLog = useRef()
    const [handleSignNext, setHandleSignNext] = useState(false)
    const handleOnNextClick = ()=>{
        setHandleSignNext(true)
        beforeLog.current.style.display = "none"
        otpLog.current.style.display = "block"
    }
    const handleOnDash = ()=>{

    }
    return (
        <div className="login3">
            <div className="inputLoginSection">
                <div className='loginSectionInitial3' ref = {beforeLog}>
                    <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200  appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px]" placeholder="Phone Number" type="text"></input>
                    <div className="buttonInputSignIn">

                        <button onClick={handleOnNextClick} class="cursor-pointer duration-200  buttonRightShift3" title="Go Back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-blue-300">
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                            </svg>
                        </button>

                    </div>

                </div>
                <div className="signUpInstead3"></div>



                <div className="otpSection3" ref = {otpLog}>
                    <div className="otpSectionWrite3">
                        <input class="block  px-6 py-3 text-black bg-white border border-gray-200  appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[50px]" type="text"></input>
                        <input class="block  px-6 py-3 text-black bg-white border border-gray-200  appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[50px]" type="text"></input>
                        <input class="block  px-6 py-3 text-black bg-white border border-gray-200  appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[50px]" type="text"></input>
                        <input class="block  px-6 py-3 text-black bg-white border border-gray-200  appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[50px]" type="text"></input>
                        <input class="block  px-6 py-3 text-black bg-white border border-gray-200  appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[50px]" type="text"></input>
                        <input class="block  px-6 py-3 text-black bg-white border border-gray-200  appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[50px]" type="text"></input>

                    </div>

                    <div className="buttonInputSignIn">

                        <Link to = "/profile"><button onClick={handleOnDash} class="cursor-pointer duration-200  buttonRightShift3" title="Go Back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-blue-300">
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                            </svg>
                        </button></Link>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login