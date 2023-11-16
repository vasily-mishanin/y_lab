import { useRouteError } from 'react-router-dom';

type RouteError = {
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id='error-page' style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops! 🤷</h1>
      <p>Sorry, requested page does not exist.</p>
      <p>
        <i>message: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}
