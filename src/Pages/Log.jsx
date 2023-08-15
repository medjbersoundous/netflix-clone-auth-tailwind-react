import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'
const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, logIn } = UserAuth(); 
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <div className='text-white'>
    <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-full h-full object-cover' 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/8db2c637-af3a-4cc7-a59e-edec17f7a102/DZ-fr-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix image" 
         />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
             <div className='max-w-[450px] h-[600px] mx-auto bg-black/75'>
                 <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Log In</h1>
                    {error ? <p className=' p-2 rounded my-2 bg-orange-400  ' >We did not find an account with this email address. Please try again or <Link to='/sign' className='underline'  >create a new account.</Link> </p> : null }
                      <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email'autoComplete='email' className='p-2 my-2  bg-gray-600 '/>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' autoComplete='current-password' className='p-2 my-2 bg-gray-600'/>
                        <button className='bg-red-600 p-2 my-8 rounded font-bold'>Log In</button>
                        <div className='flex justify-between items-center text-gray-500 text-sm'>
                            <p><input className='mr-2' type="checkbox"  /> Remember me</p>
                            <p>Need help?</p>
                        </div>
                        <p className='py-4'>
                            <span className='text-gray-500'>
                           New to Netflix?
                            </span>
                          {''}
                          <Link to='/sign'>Sign up</Link>
                        </p>
                      </form>
                 </div>
             </div>
        </div>
    </div>
</div>
  )
}

export default LogIn