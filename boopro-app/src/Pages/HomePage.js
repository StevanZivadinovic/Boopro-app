import React, { useEffect, useState } from 'react';
import Row from '../components/Row/Row.js';
import requests from './../helperFunctions/requests.js';
import {db} from './../config/firebase.js';
import {updateDoc, doc, onSnapshot} from 'firebase/firestore';
import { key } from './../helperFunctions/requests.js';

const HomePage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    onSnapshot(doc(db, 'genres', `genresDoc`),doc=>{
      
        setMovies(doc.data()?.genres);
    })
  }, [])
  console.log(movies);
  return (
    <>
    {
     movies.map((a,index)=>{
     return <Row key={a.id} IDRow={a.id} title={a.name} requestURL={`https://api.themoviedb.org/3/discover/movie?with_genres=${a.id}&api_key=${key}`}></Row>
     })
    }
      
  </>
  )
}

export default HomePage