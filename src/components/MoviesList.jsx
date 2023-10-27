import { Link } from 'react-router-dom';

export function MoviesList({ movies }) {
  return (
    <div>
      {movies.map(elem => (
        <li key={elem.id}>
          <Link to={`${elem.id}`}>{elem.title ? elem.title : elem.name}</Link>
        </li>
      ))}
    </div>
  );
}
