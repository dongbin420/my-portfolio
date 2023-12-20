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
          Hi, my name is Dongbin, I&apos;m passionate about solving problems
          through logical and flexible thinking.
        </p>
        <p className={styles['content-text-2']}>
          I love seeing my deep thoughts turn into reality on the web during the
          problem-solving journey. it&apos;s also bringing me so much joy and a
          great sense of accomplishment.
        </p>
      </section>
    </main>
  );
}
