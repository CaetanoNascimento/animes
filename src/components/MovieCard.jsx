import { Link } from "react-router-dom"

import { FaStar} from 'react-icons/fa'




const MovieCard = ({movie, showLink = true}) => {

  return (
  <div className="movie-card">
    <img src={movie.images.jpg.image_url} alt={movie.title}></img>
    <h2>{movie.title}</h2>
    <p>
        <FaStar/> {movie.score}
    </p>
    {showLink && <Link to={`/movie/${movie.mal_id}`}>Detalhes</Link>}
  </div>
  )
}

export default MovieCard
