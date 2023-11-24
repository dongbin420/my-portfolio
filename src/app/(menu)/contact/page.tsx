'use client';

import styles from './page.module.css';
import { contact } from '../../../../public/data/data';

export default function Page() {
  const handlePhoneClick = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    text: string
  ) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(text);
      alert('Copied!');
    } catch (e) {
      alert('Copy failed!');
    }
  };

  return (
    <main className={styles['main-container']}>
      <h1 className={styles['contact-title']}>
        Contact<span className={styles['dot']}>.</span>
      </h1>
      <section className={styles['content-container']}>
        <div className={styles['contact-container']}>
          <div className={styles['link-container']}>
            {contact.slice(0, 2).map((info) => {
              return (
                <a
                  key={info.method}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles[info.method]}
                  onClick={
                    info.method === 'phone'
                      ? (event) => {
                          handlePhoneClick(event, info.name);
                        }
                      : undefined
                  }
                >
                  {info.name}
                </a>
              );
            })}
          </div>
          <div className={styles['link-container']}>
            {contact.slice(2, 4).map((info) => {
              return (
                <a
                  key={info.method}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles[info.method]}
                >
                  {info.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles['mail-container']}>
          Lorem ipsum dolor sit amet consectetur
        </div>
      </section>
    </main>
  );
}
