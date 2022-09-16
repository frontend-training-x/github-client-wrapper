import { Link } from 'react-router-dom';

import Navbar from '../components/navbar';

function HeroSection() {
  return (
    <section>
      <div>Hello world</div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Link className="underline" to="/store">
        Go to store
      </Link>
      <br />
      <Link className="underline" to="/users">
        Go to users
      </Link>
    </main>
  );
}

export default Home;
