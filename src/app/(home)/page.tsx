import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles['main-container']}>
      <section className={styles['content-section']}>
        <h1 className={styles['content-title']}>
          Frontend Developer
          <span className={styles['content-title-dot']}>.</span>
        </h1>
        <p className={styles['content-text-1']}>
          Hi, my name is Dongbin, i&apos;m building website which are beautiful
          and easy to use and i like to work with people.
        </p>
        <p className={styles['content-text-2']}>
          With a mission to build the limitless potential of the web, pursuing
          new expressions through experiments and thoughts.
        </p>
      </section>
    </main>
  );
}
