import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles['main-container']}>
      <h1 className={styles['contact-title']}>
        Projects<span className={styles['dot']}>.</span>
      </h1>

      <ul className={styles['projects-container']}>
        <Link href="/projects" className={styles['project']}>
          <li className={styles['project-container']}>
            <div className={styles['project-top']}>
              <Image
                className={styles['content-img']}
                src="/img/movielog.svg"
                width={250}
                height={100}
                priority={true}
                alt="profile"
              />
            </div>
            <div className={styles['project-bottom']}>
              <p className={styles['project-title']}>MovieLog</p>
              <p className={styles['project-summary']}>영화리뷰사이트</p>
            </div>
          </li>
        </Link>
        <Link href="/projects" className={styles['project']}>
          <li className={styles['project-container']}>
            <div className={styles['project-top']}>
              <Image
                className={styles['content-img']}
                src="/img/movielog.svg"
                width={250}
                height={100}
                priority={true}
                alt="profile"
              />
            </div>
            <div className={styles['project-bottom']}>
              <p className={styles['project-title']}>MovieLog</p>
              <p className={styles['project-summary']}>영화리뷰사이트</p>
            </div>
          </li>
        </Link>
      </ul>
    </main>
  );
}
