'use client';

import styles from './page.module.css';
import { contact } from '../../../../public/data/data';
import { useState } from 'react';

export default function Page() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleInputFocus = (inputId: string) => {
    setFocusedInput(inputId);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

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
          <h2 className={styles['mail-title']}>Send me a message!</h2>
          <form className={styles['mail-form']}>
            <div className={styles['form-row-1']}>
              <div className={styles['input-container']}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  className={styles['name-input']}
                  type="text"
                  name="name"
                  placeholder={focusedInput === 'name' ? '' : 'Enter your name'}
                  onFocus={() => handleInputFocus('name')}
                  onBlur={handleInputBlur}
                  required
                />
              </div>
              <div className={styles['input-container']}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className={styles['email-input']}
                  type="email"
                  name="email"
                  placeholder={
                    focusedInput === 'email' ? '' : 'Enter your email address'
                  }
                  onFocus={() => handleInputFocus('email')}
                  onBlur={handleInputBlur}
                  required
                />
              </div>
            </div>
            <div className={styles['form-row-2']}>
              <div
                className={`${styles['input-container']} ${styles['textarea-container']}`}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className={styles['message-input']}
                  name="message"
                  placeholder={
                    focusedInput === 'message' ? '' : 'Enter your message'
                  }
                  onFocus={() => handleInputFocus('message')}
                  onBlur={handleInputBlur}
                  rows={3}
                  required
                />
              </div>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}
