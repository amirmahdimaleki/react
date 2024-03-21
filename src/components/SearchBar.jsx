// // SearchBar.js
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { searchMovies } from '../redux/movieSlice';

// const SearchBar = () => {
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     dispatch(searchMovies(searchTerm));
//     setSearchTerm('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;

// SearchBar.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/movieSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchMovies(searchTerm));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
