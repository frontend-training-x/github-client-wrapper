import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Button from '../../components/button';
import Spinner from '../../components/spinner';
import TextField from '../../components/textField';

function SectionContainer({ children }) {
  return <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

function SpinnersSection() {
  return (
    <div className="py-10 mx-4 flex flex-col gap-8">
      <h1 className="text-2xl text-white">This is the Spinners Section</h1>
      <SectionContainer>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </SectionContainer>
    </div>
  );
}

function ButtonsSection() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="py-10 mx-4 flex flex-col gap-8">
      <h1 className="text-2xl text-white">This is the Buttons Section</h1>
      <SectionContainer>
        <div>
          <Button variant="primary">Primary button</Button>
        </div>
        <div>
          <Button variant="secondary">Secondary button</Button>
        </div>
        <div>
          <Button variant="secondary" disabled>
            Disabled Button
          </Button>
        </div>
        <div>
          <Button variant="secondary" size="sm" disabled>
            Disabled Small Button
          </Button>
        </div>
        <div>
          <Button variant="primary" size="md">
            Primary Medium Button
          </Button>
        </div>
        <div>
          <Button variant="primary" size="lg">
            Primary Large Button
          </Button>
        </div>
        <div>
          <Button variant="primary" size="xl">
            Primary XL Button
          </Button>
        </div>
        <div>
          <Button variant="primary" size="md" isLoading>
            Loading Button
          </Button>
        </div>
        <div>
          <Button isLoading={loading} onClick={() => setLoading((prev) => !prev)}>
            {loading ? 'Loading...' : 'Dynamic Button. Click Me!!!'}
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}

function TextFieldSection() {
  return (
    <div className="py-10 mx-4 flex flex-col gap-8">
      <h1 className="text-2xl text-white">This is the Text Field Section</h1>
      <SectionContainer>
        <TextField variant="primary" />
        <TextField variant="secondary" />
      </SectionContainer>
    </div>
  );
}

function App() {
  return (
    <main className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="mt-8 px-4">
        <Link to="/" className="underline text-white text-lg">
          Go to Home
        </Link>
        <ButtonsSection />
        <SpinnersSection />
        <TextFieldSection />
      </div>
    </main>
  );
}

export default App;
