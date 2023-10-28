import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Page not found, sorry. Click here to come <Link to="/">home</Link>
    </div>
  );
}
