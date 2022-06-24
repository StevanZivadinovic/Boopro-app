import axios from "axios";

import React, {useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "../Movie/Movie";
import './../Row/row.css'






const Row = ({ title, requestURL, IDRow }) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    if(movies.length>0){
      Array.from(document.querySelectorAll('.movie'))[0].focus()
    }
  
  }, [movies])
  

  useEffect(() => {
    axios.get(requestURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [requestURL]);

  const moveLeft = () => {
    let slider = document.querySelector("#slider" + IDRow);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const moveRight = () => {
    let slider = document.querySelector("#slider" + IDRow);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="relative flex flex-col items-center group">
        <MdChevronLeft
          onClick={moveLeft}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 hidden  absolute left-0 top-[50%] z-[100] cursor-pointer group-hover:block"
        />
        <h2 className="text-white text-3xl font-bold md:text-4xl p-4 text-left w-full">
          {title}
        </h2>
        <div
          id={"slider" + IDRow}
          className="w-full scroll-smooth whitespace-nowrap overflow-x-scroll relative scrollbar-hide"
        > 
          {movies.map((item, i) => {
            return <Movie item={item} key={i} tab={i} IDRow={IDRow}></Movie>;
          })}
        </div>
        <MdChevronRight
          onClick={moveRight}
          size={40}
          className="bg-white rounded-full opacity-50 hover:opacity-100 hidden absolute right-0 top-[50%] z-[100] cursor-pointer group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;