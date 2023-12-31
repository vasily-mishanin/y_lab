import { useContext } from 'react';
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
