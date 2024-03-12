// MovieList.js
import { Link } from 'react-router-dom';

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
