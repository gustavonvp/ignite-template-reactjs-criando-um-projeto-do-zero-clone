/* eslint-disable prettier/prettier */
import Link from 'next/link';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
        <Link href="/">

            <a href="/">
              <img src="../../../public/logo.svg" alt="logo" />
            </a>

        </Link>


    </header>
  );
}
