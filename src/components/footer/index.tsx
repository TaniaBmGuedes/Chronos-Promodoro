import { RouterLink } from '../routerLink';
import styles from './styles.module.css';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink hRef='/about-pomodoro/'>
        Here you can understand how Podomoro technique works
      </RouterLink>
      <RouterLink hRef='/'>
        Chronos Promodoro &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  );
}
