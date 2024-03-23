// // MovieList.js
// import { Link } from 'react-router-dom';

// const MovieList = ({  movies }) => {
//   return (
//     <div>
//       <h2></h2>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;


// MovieList.js
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const MovieList = () => {
//   const movies = useSelector((state) => state.movies);
  


//   return (
//     <div>
//       <h2>Movies</h2>
//       <ul>
//         {movies.movies.map((movie) => (
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>
//               <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//               <span>{movie.title}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const { movies, searchTerm } = useSelector((state) => state.movies);

  let filteredMovie = movies;

  if (searchTerm) {
    filteredMovie = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {filteredMovie.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <span>{movie.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

