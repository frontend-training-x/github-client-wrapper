import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h1>I am the Home Page</h1>
      <Link className="underline" to="/store">
        Go to store
      </Link>
    </main>
  );
}

export default Home;
