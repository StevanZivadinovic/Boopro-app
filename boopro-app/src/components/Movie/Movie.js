import React, {useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item, tab, IDRow }) => {

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  

  const saveShow = (e) => {
    const activeEle = document.activeElement;

    if (e.key === "Enter") {
      alert(`title:${item.title},
          tagline:${item.original_title}, 
          overview:${item.overview}, 
          vote_average:${item.vote_average}`);
    }
    if (e.key == "ArrowLeft" && activeEle.previousElementSibling) {
    
      activeEle.previousElementSibling.focus();
      if(!isInViewport(document.activeElement)){
     
       
      }
     
    } else if (e.key == "ArrowRight" && activeEle.nextElementSibling) {
      activeEle.nextElementSibling.focus();
      if(!isInViewport(document.activeElement)){
       
      
      }
    }
    else if (e.key == "ArrowDown") {
      activeEle.previousElementSibling.focus();
    }
    else if (e.key == "ArrowUp") {
      activeEle.nextElementSibling.focus();
    }
  };
  return (
    <div
      onKeyDown={(e) => saveShow(e)}
      className="w-[16.67%] inline-block cursor-pointer relative p-2 movie"
      tabIndex={-1}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      ></img>
      <div className="flex flex-col justify-center absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white">
        <p className="text-3xl font-bold text-center">{item.title}</p>
        <p className="absolute top-4 left-4 text-gray-300"></p>
      </div>
    </div>
  );
};

export default Movie;
