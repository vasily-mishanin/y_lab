import { useContext } from 'react';
import { useAuth } from '../../context/hooks/useAuth';
import { AuthContext } from '../../context/authContext';

function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>ProfilePage</h1>
      <p>{user?.email}</p>
    </div>
  );
}
export default ProfilePage;
