import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie';
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
const Row = ({title, fetchURL, ID}) => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    }, [fetchURL]);
    const slideleft=()=>{
        var slider = document.getElementById('slider' + ID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideright=()=>{
        var slider = document.getElementById('slider' +ID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
  return (
    <div className='text-white'>
    <h2 className='font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft size={40} className="bg-white left-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideleft} />
      <div id={'slider' +ID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  ">
        {movies.map((item, id) => (
         <Movie item={item} key={id}  />
        ))}
      </div>
      <MdChevronRight size={40}  className="bg-white right-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideright} />
    </div>
  </div>
  
  )
}

export default Row