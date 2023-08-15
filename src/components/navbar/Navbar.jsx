import { async } from '@firebase/util'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import netflix from "../../assets/Netflix.png"
import { UserAuth } from '../../context/AuthContext'
const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate()
  // console.log(user)
  const handleLogOut =  async () =>{
     try{
       await logOut();
       navigate('/')
     } catch (error){
      console.log(error)
     }
  }
  return (
    <div className=" flex justify-between p-5 text-white  z-[100] w-full  fixed ">
      <Link to='/'>
      <img src={netflix} alt="netflix logo" className='w-20'  />
      </Link>
     {user?.email ?  <div className=''>
        <Link to='/MyList'>
        <button  className='mr-2  font-light  '  >
         My List
        </button>
        </Link>
        
        <button onClick={handleLogOut} className='bg-red-600 p-1 w-20 rounded-md  font-light ' >
          Log Out
        </button >
      </div> :  <div className=''>
        <Link to='/log'>
        <button  className='mr-2  font-light  '  >
          Log in
        </button>
        </Link>
        <Link to='/sign'>
        <button className='bg-red-600 p-1 w-20 rounded-md  font-light ' >
          Sign up
        </button >
        </Link>
      </div>}
    </div>
  )
}

export default Navbar