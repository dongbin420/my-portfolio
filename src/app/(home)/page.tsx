'use client';

import styles from './page.module.css';
import Header from '@/ui/Header/Header';
import HamburgerMenu from '@/ui/HamburgerMenu/HamburgerMenu';
import { useState, useEffect } from 'react';
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

  return menuOpen ? (
    <HamburgerMenu toggleMenu={toggleMenu} />
  ) : (
    <>
      <Header toggleMenu={toggleMenu} />
      <main className={styles['main-container']}>
        <section className={styles['content-section']}>
          <h1 className={styles['content-title']}>
            Frontend Developer
            <span className={styles['content-title-dot']}>.</span>
          </h1>
          <p className={styles['content-text-1']}>
            Hello, my name is Dongbin, I&apos;m passionate about solving
            problems through logical and flexible thinking.
          </p>
          <p className={styles['content-text-2']}>
            I enjoy seeing my deep thoughts turn into reality on the web during
            the problem-solving journey. It also brings me so much joy and a
            great sense of accomplishment.
          </p>
        </section>
      </main>
    </>
  );
}
