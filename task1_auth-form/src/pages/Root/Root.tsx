import { Link, Outlet } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation/Navigation';
import styles from './Root.module.css';

function Root() {
  return (
    <>
      <header className={styles.header}>
        <Link to='/'>
          <span>why LOGO</span>
        </Link>
        <Navigation />
      </header>

      <main className={styles.main} id='main'>
        <Outlet />
      </main>

      <footer className={styles.footer}>Vasily Mishanin</footer>
    </>
  );
}
export default Root;
