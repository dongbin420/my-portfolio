import styles from './Header.module.css';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  return (
    <header className={styles['header-container']}>
      <Link href="/" className={styles['logo']}>
        <span className={styles['logo-text']}>dongbin</span>
        <span className={styles['logo-dot']}>.</span>
      </Link>
      <nav className={styles['nav-container']}>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <AiOutlineMenu className={styles['nav-hamburger']}></AiOutlineMenu>
    </header>
  );
}
