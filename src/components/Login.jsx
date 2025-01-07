import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validation'

const Login = () => {
    const [isLog, setIsLog] = useState(false)
    const [message, setMessage] = useState()
    const email = useRef(null)
    const password = useRef(null)

    function submitHendler() {
        const message = checkValidData(email.current.value, password.current.value);
        setMessage(message)

    }
    function signUpHendler() {
        setIsLog((p) => !p)
    }

    return (
        <div>
            <Header />
            <div className='h-screen bg-cover flex justify-center items-center bg-center w-full bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg")]'>
                <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 bg-black flex flex-col gap-6 text-white  px-10 bg-opacity-90 rounded-md py-9'>
                    <h1 className='text-2xl font-semibold capitalize  '>{isLog ? "sign in" : " Sign up"}</h1>

                    {!isLog && <input type="text" className='py-3 px-4 rounded  bg-[#161615]' placeholder='User Name' />}
                    <input ref={email} type="text" className='py-3 px-4 rounded  bg-[#161615]' placeholder='Email or mobile number' />


                    <input ref={password} type="text" className='py-3 px-4 rounded  bg-[#161615]' placeholder='Password' />
                    <p className='text-lg text-red-600 font-bold'>{message}</p>
                    <button onClick={submitHendler} className='py-2 bg-red-600 font-bold  px-4 rounded'>Sign In</button>
                    <p onClick={signUpHendler} className='cursor-pointer'>{isLog ? <div> <span className='opacity-60'>New to Netflix?</span> <span>Sign up now </span></div> : <div> <span className='opacity-60'>Alredy registered ?</span> <span>Sign in now </span></div>}</p>
                </form>
            </div>
        </div>
    )
}

export default Login
