import React from 'react'
import SavedShow from '../components/favouritemovie/SavedShow'

const MyList = () => {
  return (
    <div className='text-white'>

    <div className='w-full'>
       <img className='w-full h-[400px] object-cover' 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/8db2c637-af3a-4cc7-a59e-edec17f7a102/DZ-fr-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix image" 
         />
    </div>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] '>
          <div className='absolute top-[20%] p-4 md:p-8 '>
            <h1 className='text-3xl md:text-5xl font-bold '>My favourite movies</h1>
          </div>
    </div>
    <SavedShow /> 
    </div>

  )
}

export default MyList