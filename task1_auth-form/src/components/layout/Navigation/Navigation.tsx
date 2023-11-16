import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useAuth } from '../../../context/hooks/useAuth';
import { UserIcon, HomeIcon } from '@heroicons/react/24/solid';

function Navigation() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  const activeStyle = {
    color: '#29adb2',
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to='/'
          >
            <HomeIcon className={styles.navicon} />
          </NavLink>
        </li>

        {user && (
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to='/profile'
            >
              <UserIcon className={styles.navicon} />
            </NavLink>
          </li>
        )}

        {!user && (
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to='/signin'
            >
              Sign In
            </NavLink>
          </li>
        )}

        {user && (
          <li>
            <button className={styles.signout} onClick={handleSignOut}>
              Sign out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navigation;
