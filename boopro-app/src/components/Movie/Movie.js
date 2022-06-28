import React, {useState } from "react";


const Movie = ({ item, tab, IDRow }) => {


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
     
     
    } else if (e.key == "ArrowRight" && activeEle.nextElementSibling) {
      activeEle.nextElementSibling.focus();
      
    }
    else if (e.key == "ArrowDown" && activeEle.parentElement.parentElement.nextElementSibling) {
      let parent = activeEle.parentElement.parentElement.children[2].children;
      activeEle.parentElement.parentElement.nextElementSibling.children[2].children[Array.from(parent).indexOf(activeEle)].focus();
    }
    else if (e.key == "ArrowUp" && activeEle.parentElement.parentElement.previousElementSibling.children[2]) {
      let parent = activeEle.parentElement.parentElement.children[2].children;
      activeEle.parentElement.parentElement.previousElementSibling.children[2].children[Array.from(parent).indexOf(activeEle)].focus()

    }
  };
  return (
    <div
      onKeyDown={(e) => saveShow(e)}
      className="sm:w-[25%] md:lg:w-[16.67%]   inline-block cursor-pointer relative p-2 movie w-[33.33%]"
      tabIndex={0}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      ></img>
      <div className="flex flex-col justify-center absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80 text-white">
        <p className="text-3xl font-bold text-center">{item.title}</p>
        <p className="absolute top-4 left-4 text-gray-300"></p>
      </div>
        <p className="text-[15px] text-white font-bold text-center hidden titleBelowMovie">{item.title}</p>
    </div>
  );
};

export default Movie;
