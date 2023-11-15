import styles from './Input.module.css';

type Props = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  label: string;
};

function Input({ type, name, id, placeholder, label }: Props) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} />
      <span className={styles.error}>Error</span>
      {type == 'password' && <span className={styles.pswIcon}>Icon</span>}
    </div>
  );
}
export default Input;
