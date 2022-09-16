import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';

function UserPage() {
  const params = useParams();

  return (
    <div className="text-black">
      <Navbar />
      Hello
      <strong className="ml-1">{params.username || 'Unknown User'}</strong>
    </div>
  );
}

export default UserPage;
