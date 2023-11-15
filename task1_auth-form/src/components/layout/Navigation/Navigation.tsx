import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
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
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? '#c5e898' : '' })}
            to='/signin'
          >
            SingIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
