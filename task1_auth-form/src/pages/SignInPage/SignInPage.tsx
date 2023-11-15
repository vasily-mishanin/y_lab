import SignInForm from '../../components/SignInForm/SignInForm';
import styles from './SignInPage.module.css';

function SignInPage() {
  return (
    <div className={styles.signinPage}>
      <SignInForm />
    </div>
  );
}
export default SignInPage;
