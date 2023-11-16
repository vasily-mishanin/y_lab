import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useAuth } from '../../../context/hooks/useAuth';

function Navigation() {
  const { logout, user } = useAuth();

  console.log(user);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? '#c5e898' : '' })}
            to='/'
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? '#c5e898' : '' })}
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
