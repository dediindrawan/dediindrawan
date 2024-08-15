import { useRouteError, Link } from 'react-router-dom';

const PageNotFound = () => {
  const error = useRouteError();

  return (
    <div className="page-not-found">
      <span>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>

        <span>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
          <p>Error: {error.error.message}</p>
        </span>

        <Link to="/">Back to main page</Link>
      </span>
    </div>
  );
};

export default PageNotFound;
