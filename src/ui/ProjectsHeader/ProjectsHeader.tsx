import styles from './ProjectsHeader.module.css';
import Link from 'next/link';
import { IoArrowBackSharp } from 'react-icons/io5';

export default function ProjectsHeader() {
  return (
    <header className={styles['header-container']}>
      <Link href="/projects">
        <IoArrowBackSharp className={styles['back']} />
      </Link>
    </header>
  );
}
