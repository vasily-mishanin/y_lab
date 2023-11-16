import { Link, Outlet } from 'react-router-dom';
import Navigation from '../../components/layout/Navigation/Navigation';
import styles from './Root.module.css';
import { useAuth } from '../../context/hooks/useAuth';
import { UserIcon } from '@heroicons/react/24/solid';

function Root() {
  const { user } = useAuth();
  return (
    <>
      <header className={styles.header}>
        <Link to='/'>
          <span>SOME LOGO</span>
        </Link>

        <div className={styles.controls}>
          <Navigation />
          {user && (
            <div className={styles.user}>
              <UserIcon className={styles.usericon} />
              <span>{user?.email}</span>
            </div>
          )}
        </div>
      </header>
      <main className={styles.main} id='main'>
        <Outlet />
      </main>
      <footer className={styles.footer}>Vasily Mishanin</footer>
    </>
  );
}
export default Root;
