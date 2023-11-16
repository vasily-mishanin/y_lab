import { useState } from 'react';
import styles from './Input.module.css';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

type Props = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
  errorMessage?: string;
};

function Input({
  type,
  name,
  id,
  placeholder,
  label,
  value,
  errorMessage,
  required,
  onChange,
}: Props) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleToggleShowPassword = () => {
    setIsPasswordShown((prev) => !prev);
  };

  const inputType = type === 'password' && isPasswordShown ? 'text' : type;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{`${label}${required ? ' *' : ''}`}</label>
      <input
        className={errorMessage ? styles.invalid : ''}
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
      <span className={styles.errorMessage}>{errorMessage}</span>
      {type == 'password' && isPasswordShown && (
        <EyeSlashIcon
          className={styles.passwordIcon}
          onClick={handleToggleShowPassword}
        />
      )}
      {type == 'password' && !isPasswordShown && (
        <EyeIcon
          className={styles.passwordIcon}
          onClick={handleToggleShowPassword}
        />
      )}
    </div>
  );
}
export default Input;
