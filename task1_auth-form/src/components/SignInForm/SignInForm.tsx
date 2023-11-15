import Input from './Input';
import styles from './SignInForm.module.css';

function SignInForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        name='email'
        label='Email'
        type='text'
        id='email'
        placeholder='Enter valid email'
      />
      <Input
        name='password'
        label='Password'
        type='password'
        id='password'
        placeholder='Enter valid password'
      />
      <button className={styles.btnSubmit} type='submit'>
        Войти
      </button>
    </form>
  );
}
export default SignInForm;
