// moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [
    // Initial state can be an empty array
  ],
  reducers: {
    setMovies: (state, action) => {
      return action.payload;
    },
    searchMovies: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      return state.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setMovies, searchMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
