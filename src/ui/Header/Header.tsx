import styles from './Header.module.css';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

interface HeaderProps {
  toggleMenu: () => void;
}

export default function Header({ toggleMenu }: HeaderProps) {
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
      <AiOutlineMenu
        onClick={toggleMenu}
        className={styles['nav-hamburger']}
      ></AiOutlineMenu>
    </header>
  );
}
