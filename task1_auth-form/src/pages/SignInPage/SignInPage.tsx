import { useEffect, useState } from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import { useAuth } from '../../context/hooks/useAuth';
import styles from './SignInPage.module.css';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  console.log('SignInPage ', user);

  useEffect(() => {
    if (user) {
      navigate('/');
    } else {
      setLoading(false);
    }
  }, [user]);

  return !loading ? (
    <div className={styles.signinPage}>
      <SignInForm />
    </div>
  ) : null;
}
export default SignInPage;
