import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  toggleMenu: () => void;
}

export default function HamburgerMenu({ toggleMenu }: HamburgerMenuProps) {
  return (
    <div className={styles['hamburger-container']}>
      <div className={styles['link-container']}>
        <Link href="/projects" className={styles['link']}>
          <div className={styles['link-text']}>projects</div>
        </Link>
        <Link href="/about" className={styles['link']}>
          <div className={styles['link-text']}>about</div>
        </Link>
        <Link href="/contact" className={styles['link']}>
          <div className={styles['link-text']}>contact</div>
        </Link>
      </div>
      <IoMdClose onClick={toggleMenu} className={styles['close']}></IoMdClose>
    </div>
  );
}
