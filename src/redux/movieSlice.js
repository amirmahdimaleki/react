// // moviesSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState: [
//     // Initial state can be an empty array
//   ],
//   reducers: {
//     setMovies: (state, action) => {
//       return action.payload;
//     },
//     searchMovies: (state, action) => {
//       const searchTerm = action.payload.toLowerCase();
//       return state.filter((movie) =>
//         movie.title.toLowerCase().includes(searchTerm)
//       );
//     },
//   },
// });

// export const { setMovies, searchMovies } = moviesSlice.actions;
// export default moviesSlice.reducer;

// movieSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   movies: [],
// };

// export const movieSlice = createSlice({
//   name: 'movies',
//   initialState,
//   reducers: {
//     setMovies: (state, action) => {
//       state.movies = action.payload;
//     },
//     searchMovies: (state, action) => {
//       const searchTerm = action.payload.toLowerCase();
//       state.movies = state.movies.filter(movie =>
//         movie.title.toLowerCase().includes(searchTerm)
//       );
//     },
//   },
// });

// export const { setMovies, searchMovies } = movieSlice.actions;

// export default movieSlice.reducer;

// moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  searchTerm: '',
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    searchMovies: (state, action) => {
      // const searchTerm = action.payload.toLowerCase();
      // state.movies = state.movies.filter(movie =>
      //   movie.title.toLowerCase().includes(searchTerm)
      // );
      state.searchTerm = action.payload;
    },
  },
});

export const { setMovies, searchMovies } = movieSlice.actions;

export default movieSlice.reducer;