// SearchBar.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/movieSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchTerm));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
