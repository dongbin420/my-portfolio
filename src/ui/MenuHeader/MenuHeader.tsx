import styles from './MenuHeader.module.css';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

interface HeaderProps {
  toggleMenu: () => void;
}

export default function MenuHeader({ toggleMenu }: HeaderProps) {
  return (
    <header className={styles['header-container']}>
      <Link href="/">
        <AiFillHome className={styles['home']} />
      </Link>
      <nav className={styles['nav-container']}>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <AiOutlineMenu onClick={toggleMenu} className={styles['nav-hamburger']}></AiOutlineMenu>
    </header>
  );
}
