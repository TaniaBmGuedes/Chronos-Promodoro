import styles from './styles.module.css';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Here you can understand how Podomoro technique works</a>
      <a href=''>Chronos Promodoro &copy;  {new Date().getFullYear()}</a>
    </footer>
  );
}
