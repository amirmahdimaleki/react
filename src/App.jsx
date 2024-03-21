// // App.js
// import  { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// // import { createRoot } from 'react-dom/client';
// import axios from 'axios';
// import { setMovies } from './redux/movieSlice';
// import MovieList from './components/MovieList';
// import MovieDetails from './components/MovieDetail';
// import SearchBar from './components/SearchBar';

// const App = () => {
//   const dispatch = useDispatch();
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   // Fetch trending movies data from TMDb API
//   useEffect(() => {
//     const fetchTrendingMovies = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.themoviedb.org/3/trending/movie/week',
//           {
//             params: {
//               api_key: '0cd4a4f3b989aedef2d995404f439ea9',
//             },
//           }
//         );

//         // Take the first 10 movies from the response
//         const moviesData = response.data.results.slice(0, 10);
//         setTrendingMovies(moviesData);

//         dispatch(setMovies(moviesData));
//       } catch (error) {
//         console.error('Error fetching trending movies:', error);
//       }
//     };

//     fetchTrendingMovies();
//   }, [dispatch]);

//   return (
//     <Router>
//       <div>
//         <h1>Movie Search App</h1>
//         <SearchBar />
//         <Routes>
//           <Route
//             path="/"
//             exact
//             // render={() => (
//             //   <MovieList title="Trending Movies" movies={trendingMovies} />
//             // )}
//             element = {<MovieList title={trendingMovies} movies={trendingMovies} />}
//           />
//           <Route path="/movies/:id" element={<MovieDetails/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// // Use createRoot instead of ReactDOM.render
// export default App
// // createRoot(document.getElementById('root')).render(<App />);


// App.js
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { createRoot } from 'react-dom';
import axios from 'axios';
import { setMovies } from './redux/movieSlice';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/week',
          {
            params: {
              api_key: '0cd4a4f3b989aedef2d995404f439ea9',
            },
          }
        );

        dispatch(setMovies(response.data.results));
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, [dispatch]);

  return (
    <Router>
      <div>
        <h1>Movie Search App</h1>
        <SearchBar />
        <Routes>
          <Route path="/" exact element={ <MovieList/> } />
          <Route path="/movies/:id" element={ <MovieDetails/> } />
        </Routes>
      </div>
    </Router>
  );
};

// createRoot(document.getElementById('root')).render(<App />);
export default App
