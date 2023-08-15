import { async } from '@firebase/util';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import { useState } from 'react';
const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth(); 
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await signUp(email, password);
        navigate('/')
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div className='text-white'>
        <div className='w-full h-screen '>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/8db2c637-af3a-4cc7-a59e-edec17f7a102/DZ-fr-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix image" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                 <div className='max-w-[450px] h-[600px] mx-auto bg-black/75'>
                     <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                          <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email'autoComplete='email' className='p-2 my-2  bg-gray-600 '/>
                            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' autoComplete='current-password' className='p-2 my-2 bg-gray-600'/>
                            <button className='bg-red-600 p-2 my-8 rounded font-bold'>Sign Up</button>
                            <div className='flex justify-between items-center text-gray-500 text-sm'>
                                <p><input className='mr-2' type="checkbox"  /> Remember me</p>
                                <p>Need help?</p>
                            </div>
                            <p className='py-4'>
                                <span className='text-gray-500'>
                                Already subscribed to Netflix?
                                </span>
                              {''}
                              <Link to='/log'>Log In</Link>
                            </p>
                          </form>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Sign