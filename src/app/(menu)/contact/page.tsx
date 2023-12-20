'use client';

import styles from './page.module.css';
import { contact } from '../../../../public/data/data';
import { useState, useEffect, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import MenuHeader from '@/ui/MenuHeader/MenuHeader';
import HamburgerMenu from '@/ui/HamburgerMenu/HamburgerMenu';
import { useMediaQuery } from 'react-responsive';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isWideScreen = useMediaQuery({ minWidth: 751 });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (isWideScreen) {
      setMenuOpen(false);
    }
  }, [isWideScreen]);

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

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_ja8o0fe',
          'template_3ucpvo9',
          form.current,
          'oSGR11mjuXVcpLpWD'
        )
        .then(() => {
          alert('이메일이 전송되었습니다.');

          if (form.current) {
            form.current.reset();
          }
        })
        .catch((err) => {
          alert(`에러가 발생했습니다.: ${err}`);
        });
    }
  };

  return menuOpen ? (
    <HamburgerMenu toggleMenu={toggleMenu} />
  ) : (
    <>
      <MenuHeader toggleMenu={toggleMenu} />
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
            <form
              ref={form}
              onSubmit={sendEmail}
              className={styles['mail-form']}
            >
              <div className={styles['form-row-1']}>
                <div className={styles['input-container']}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    className={styles['name-input']}
                    type="text"
                    name="from_name"
                    placeholder={
                      focusedInput === 'name' ? '' : 'Enter your name'
                    }
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
                    name="from_email"
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
                    name="user_message"
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
              <div className={styles['mail-btn-container']}>
                <button type="submit" className={styles['mail-btn']}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
