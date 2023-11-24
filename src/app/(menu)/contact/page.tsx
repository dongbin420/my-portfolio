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
      alert('전화번호가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다.');
    }
  };

  return (
    <main className={styles['main-container']}>
      <h1 className={styles['contact-title']}>
        Contact<span className={styles['dot']}>.</span>
      </h1>
      <ul className={styles['contact-container']}>
        {contact.map((info) => {
          return (
            <li key={info.method} className={styles['link-container']}>
              <a
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
            </li>
          );
        })}
      </ul>
    </main>
  );
}
