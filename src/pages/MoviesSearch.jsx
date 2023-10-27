import axios from 'axios';
import { useEffect, useState } from 'react';
import { MYAPI } from './Home';
import { Link, useSearchParams } from 'react-router-dom';

export function MoviesSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      const addrQuery = searchParams.get('query');
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${addrQuery}&api_key=${MYAPI}`
        );
        setMovies(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
        setMovies(null);
      }
    };

    if (searchParams.get('query')) {
      fetchData();
    }
  }, [query, searchParams]);

  const submitHandler = event => {
    event.preventDefault();
    setSearchParams({ query: event.currentTarget[0].value });
    setQuery(event.currentTarget[0].value);
  };
  return (
    <div>
      <h2>Search a movie</h2>
      <form onSubmit={submitHandler} action="">
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <div>
          <ul>
            {movies.results.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
              );
            })}
          </ul>
          {movies.results.length === 0 && <p>Movies has not found</p>}
        </div>
      )}
    </div>
  );
}
