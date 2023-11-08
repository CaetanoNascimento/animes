import { useState, useEffect } from "react"
import ReactPlayer from 'react-player/youtube'
import { useParams } from "react-router-dom"

import {
    BsGraphUp,
    BsWallet2,
    BsFillFileEarmarkTextFill,
    BsHourglassSplit,
    BsPlayCircle
} from 'react-icons/bs'

import {FaRankingStar} from 'react-icons/fa6'

import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import MovieCard from "../components/MovieCard"


import './Movie.css'

const moviesURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
    const {id} = useParams()
    const[movie, setMovie] = useState(null)

    const getMovie = async(url) =>{
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data.data);
    };


   /* const formatCurrency = (number) => {
        return number.toLocaleString('en-US' ,{
            style: 'currency',
            currency: 'USD',
        })
    }*/

    useEffect(() => {
        const movieUrl = `${moviesURL}/${id}`
        console.log(movieUrl)
        getMovie(movieUrl);
    }, []);

    console.log(movie)
  return (
    <div className="movie-page">
      {movie && 
      <>
      <MovieCard movie={movie} showLink={false}/>
      <p className="tagline">{movie.tagline}</p>
      <div className="info">
        <h3>
            <FaRankingStar/> Rank
        </h3>
        <p>{movie.rank}</p>
      </div>
      <div className="info">
        <h3>
            <BiCameraMovie /> Produção
        </h3>
        <p>{movie.studios[0].name}</p>
      </div>
      <div className="info">
        <h3>
            <BsGraphUp /> Popularidade
        </h3>
        <p>{movie.popularity}</p>
      </div>
      <div className="info">
        <h3>
            <BsHourglassSplit /> Duração
        </h3>
        <p>{movie.episodes} Episódios</p>
      </div>
      <div className="info ">
        <h3>
            <BsPlayCircle /> Trailer
        </h3>
        <ReactPlayer url={movie.trailer.url} />
      </div>
      <div className="info description">
        <h3>
            <BsFillFileEarmarkTextFill /> Descrição
        </h3>
        <p>{movie.synopsis}</p>
      </div>


       </>
       }
    </div>
  )
}

export default Movie
