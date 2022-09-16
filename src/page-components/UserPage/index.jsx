import { useParams } from 'react-router-dom';

function UserPage() {
  const params = useParams();

  return (
    <div className="text-white">
      Hello
      <strong className="ml-1">{params.username || 'Unknown User'}</strong>
    </div>
  );
}

export default UserPage;
