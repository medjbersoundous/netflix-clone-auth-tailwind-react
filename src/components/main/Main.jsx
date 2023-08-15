import axios from 'axios';
import React from 'react'
import requests from '../../Request';
import { useState, useEffect } from 'react';
const Main = () => {
     const [movies, setMovies] = useState([]);

     const movie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;


     useEffect(() => {
        axios.get(requests.requestPopular).then((response)=>{
          setMovies(response.data.results)
        })
     }, [])
    //  console.log(movie)
    const truncateString=(str, num)=>{
      if(str?.length > num){
        return str.slice(0, num) + '...';
      }else{
        return str;
      }
    }
  return (
    <div className='w-full h-[550px] text-white '>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover  ' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
        <div className='absolute w-full top-[30%] p-4 md:p-8'>
          <h1 className=' md:text-3xl font-bold'>{movie?.title}</h1>
        <div className='my-2'>
          <button className='border bg-gray-200 text-black border-gray-300 py-2 px-3 w-20' >Play</button>
          <button className='border border-gray-300 py-2 px-3 ml-4' >watch later</button>
        </div>
        <p className='text-gray-400 text-sm' >Released: {movie?.release_date}</p>
        <p className='text-gray-300 w-full md:max-w-[50%] xl:max-w-[35%]'>{truncateString(movie?.overview, 150)}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Main