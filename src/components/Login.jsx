import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isLog, setIsLog] = useState(false)
    function signUpHendler() {
        setIsLog((p) => !p)
    }
    function formHendler(e) {
        e.prventDefault()
    }
    return (
        <div>
            <Header />
            <div className='h-screen bg-cover flex justify-center items-center bg-center w-full bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg")]'>
                <form onSubmit={(e) => {
                    formHendler(e)
                }} className='w-3/12 bg-black flex flex-col gap-6 text-white  px-10 bg-opacity-90 rounded-md py-9'>
                    <h1 className='text-2xl font-semibold capitalize  '>{isLog ? "sign in" : " Sign up"}</h1>
                    <input type="text" className='py-3 px-4 rounded  bg-[#161615]' placeholder='Email or mobile number' />

                    <input type="text" className='py-3 px-4 rounded  bg-[#161615]' placeholder='Password' />

                    <button className='py-2 bg-red-600 font-bold  px-4 rounded'>Sign In</button>
                    <button><span className='opacity-60' onClick={signUpHendler}>New to Netflix?</span> Sign up now.</button>
                </form>
            </div>
        </div>
    )
}

export default Login
