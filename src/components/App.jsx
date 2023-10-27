import { MovieDetails } from '../pages/MovieDetails';
import { MoviesSearch } from '../pages/MoviesSearch';
import { Home } from '../pages/Home';
import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Reviews } from './Reviews';
import { Cast } from './Cast';

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;

  return (
    <div>
      <nav>
        <StyledLink to="/movies">Home</StyledLink>
        <StyledLink to="/moviesSearch">Search</StyledLink>
      </nav>

      <Routes>
        <Route path="/movies" element={<Home />} />
        <Route path="/moviesSearch" element={<MoviesSearch />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
