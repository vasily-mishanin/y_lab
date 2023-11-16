import { useState } from 'react';
import Input from './Input';
import styles from './SignInForm.module.css';
import { validateEmail, validatePassword } from './helpers';
import { useAuth } from '../../context/hooks/useAuth';

type Inputs = {
  email: string;
  password: string;
};

const initialState = {
  email: '',
  password: '',
};

function SignInForm() {
  const [inputs, setInputs] = useState<Inputs>(initialState);
  const { login, error, loading } = useAuth();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const emailError = validateEmail(inputs.email);
  const passwordError = validatePassword(inputs.password);
  const isDisabled = Boolean(
    !isDirty || (isSubmitted && (emailError || passwordError))
  );
  const isFormValid = isDirty && !emailError && !passwordError;

  const handleChange = (name: string, value: string) => {
    setIsDirty(true);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isFormValid) {
      console.log({ inputs });
      const enteredUser = { email: inputs.email, password: inputs.password };
      login(enteredUser);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <p className={styles.authErrorMessage}>
          {isSubmitted && error ? error : ''}
        </p>
        <Input
          name='email'
          label='Email'
          type='text'
          id='email'
          placeholder='Enter email'
          value={inputs.email}
          errorMessage={isSubmitted ? emailError : ''}
          required
          onChange={handleChange}
        />

        <Input
          name='password'
          label='Password'
          type='password'
          id='password'
          placeholder='Enter password'
          value={inputs.password}
          errorMessage={isSubmitted ? passwordError : ''}
          required
          onChange={handleChange}
        />
      </div>

      <button className={styles.btnSubmit} type='submit' disabled={isDisabled}>
        {loading ? 'вход...' : 'Войти'}
      </button>
    </form>
  );
}

export default SignInForm;
