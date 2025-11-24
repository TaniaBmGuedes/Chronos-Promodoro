import type React from 'react';
import styles from './styles.module.css';

export type HeadProps = {
  children: React.ReactNode;
};
export function Head({children}: HeadProps) {
 
  return <h1 className={styles.heading}>{children}</h1>;
}
