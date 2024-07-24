'use client';

import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../../../public/data/data';
import MenuHeader from '@/ui/MenuHeader/MenuHeader';
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
      <MenuHeader toggleMenu={toggleMenu} />
      <main className={styles['main-container']}>
        <h1 className={styles['contact-title']}>
          Projects<span className={styles['dot']}>.</span>
        </h1>

        <ul className={styles['projects-container']}>
          {projects.map((project, index) => {
            return (
              <Link
                key={index}
                href={{ pathname: `/projects/${project.route}` }}
                // href={`/projects/${project.route}`}
                className={styles['project']}
              >
                <li className={styles['project-container']}>
                  <div className={`${styles['project-top']} ${styles[project.bgClass]}`}>
                    <Image
                      className={styles['content-img']}
                      src={`/img/${project.img}`}
                      width={250}
                      height={100}
                      alt="projectLogo"
                      priority={project.name === 'MovieLog' ? true : false}
                    />
                  </div>
                  <div className={styles['project-bottom']}>
                    <p className={styles['project-title']}>{project.name}</p>
                    <p className={styles['project-summary']}>{project.summary}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
}
