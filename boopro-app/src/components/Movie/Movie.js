import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa';
// @ts-ignore
// import {db} from './../../config/Firebase.ts';
// import {arrayUnion, doc, updateDoc} from 'firebase/firestore';
//@ts-ignore
// import {User} from './../AuthContext/AuthContext.tsx'
const Movie = ({item, tab}) => {
    // const [like, setLike] = useState(false);
    // const [saved, setSaved] = useState(false);
    // const {user} = User();

    // const movieID = doc(db, 'users',`${user?.email}`);

    

    const saveShow = (e) => {
      console.log(e);
      if(e.key ==='Enter'){
        alert(`title:${item.title},
          tagline:${item.original_title}, 
          overview:${item.overview}, 
          vote_average:${item.vote_average}`);
      }
    };
  return (
    <div onKeyDown={(e)=>saveShow(e)} className='w-[16.67%] inline-block cursor-pointer relative p-2' tabIndex={tab}>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title}></img>
    <div className='flex flex-col justify-center absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white'>
      <p className='text-3xl font-bold text-center'>{item.title}</p>
      <p className='absolute top-4 left-4 text-gray-300'>
      </p>
    </div>
  </div>
  )
}

export default Movie