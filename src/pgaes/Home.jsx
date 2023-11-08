import {useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard';
//useState gerencia o estado dos filmes
//UseEffect faz a chamada da Api

import './MoviesGrid.css'


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json();

        console.log(data)
        console.log(data.results)
       setTopMovies(data.data);
    }


    useEffect(() =>{
        const topRatedUrl = `${moviesURL}`
        console.log('wata')
        console.log(topRatedUrl)
        getTopRatedMovies(topRatedUrl)
    }, []);
        

    
  return (
    <div className='container'>
        <h2 className='title'>Melhores Animes:</h2>
        <div className='movies-container'>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.mal_id} movie={movie} />)}
        </div>
      
    </div>
  )
}

export default Home
