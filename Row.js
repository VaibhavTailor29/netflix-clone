import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Row({title, fetchUrl, isLargeRow=false}) {

  const [Movies, setMovies] = useState([]);
  const[trailerUrl, setTrailerUrl] = useState("");

  const baseImageURL = "https://image.tmdb.org/t/p/original/";

  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  },[fetchUrl]);

  const opts = {
    height: "500",
    width: "100%",
    playerVars:{
        autplay:1
    }
  }

  const handleClick = (movie) =>{
      if(trailerUrl){
          setTrailerUrl('');
      }
      else{
          movieTrailer(movie?.name || "")
          .then(url=>{
              const urlParam = new URLSearchParams( new URL(url).search);
              setTrailerUrl(urlParam.get("v")); 
          }).catch((error)=>console.log(error));
      }
  }

  console.log(Movies);

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className='row_posters'>
        {Movies.map(movie=>(
          ((isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path)) && (
            <img 
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseImageURL}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
          )
        ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row