import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../Home'));
const MoviesSearch = lazy(() => import('../pages/MoviesSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

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
      <Suspense fallback={'Loading'}>
        <Routes>
          <Route path="/movies" element={<Home />} />
          <Route path="/moviesSearch" element={<MoviesSearch />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
