import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <main className={styles['main-container']}>
        <header className={styles['header-container']}>
          <div className={styles['logo']}>
            <span className={styles['logo-text']}>dongbin</span>
            <span className={styles['logo-dot']}>.</span>
          </div>
          <nav className={styles['nav-container']}>
            <a>Project</a>
            <a>About</a>
            <a>Contact</a>
          </nav>
        </header>
        <section className={styles['content-section']}>
          <h1 className={styles['content-title']}>
            Frontend Developer
            <span className={styles['content-title-dot']}>.</span>
          </h1>
          <p className={styles['content-text-1']}>
            Dongbin Yoo, Born in Incheon, South Korea, believes that the web can
            be more diverse and inspiring.
          </p>
          <p className={styles['content-text-2']}>
            With a mission to build the limitless potential of the web, pursuing
            new expressions through experiments and thoughts.
          </p>
        </section>
      </main>
      <div className={styles['bottom-background-color']}></div>
    </>
  );
}
