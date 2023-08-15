import React from 'react'
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import { useState, useEffect } from 'react'
import { UserAuth } from '../../context/AuthContext'
import { db } from '../../firebase'
import {AiOutlineClose} from 'react-icons/ai'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
const SavedShow = () => {
  const [movies, setMovies] = useState([])
  const {user} = UserAuth()
  const slideleft=()=>{
    var slider = document.getElementById('slider' )
    slider.scrollLeft = slider.scrollLeft - 500;
}
const slideright=()=>{
    var slider = document.getElementById('slider' )
    slider.scrollLeft = slider.scrollLeft + 500;
}
useEffect(()=>{
  if (user?.email) {
    onSnapshot(doc(db, 'users', user.email), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }
  
  
}, [user?.email])
const movieref = doc(db, 'users', `${user?.email}`)
const deleteshow = async(passedid)=>{
  try{
     const result = movies.filter((item)=>
      item.id !== passedid
     )
     await updateDoc(movieref, {
      savedShows: result,
     })
  } catch(error){
    console.log(error)
  }
}
  return (
    <div className='text-white'>
    <h2 className='font-bold md:text-xl p-4'>My favourite movies</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft size={40} className="bg-white left-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideleft} />
      <div id={'slider' } className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  ">
        { movies && movies.map((item, id) => (
         <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
         <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />
         <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 '>
         <p className='text-xs md:text-sm font-bold flex justify-center items-center h-full text-center break-words' style={{ whiteSpace: 'normal' }}>
       {item?.title}
     </p>
     <p className='absolute text-gray-200 top-4 right-4' 
     onClick={()=>{
      deleteshow(item.id)
     }}><AiOutlineClose /> </p>
     
         </div>
       </div>
        ))}
      </div>
      <MdChevronRight size={40}  className="bg-white right-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideright} />
    </div>
  </div>
  
  )
}

export default SavedShow