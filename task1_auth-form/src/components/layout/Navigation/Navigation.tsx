import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useAuth } from '../../../context/hooks/useAuth';
import { UserIcon, HomeIcon } from '@heroicons/react/24/solid';

function Navigation() {
  const { logout, user } = useAuth();

  console.log(user);

  const activeStyle = {
    color: '#29adb2',
    textDecoration: 'underline',
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
              <div className={styles.user}>
                <UserIcon className={styles.navicon} />
              </div>
            </NavLink>
          </li>
        )}

        {!user && (
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to='/signin'
            >
              SignIn
            </NavLink>
          </li>
        )}

        {user && (
          <li>
            <button className={styles.signout} onClick={logout}>
              Sign out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default Navigation;
