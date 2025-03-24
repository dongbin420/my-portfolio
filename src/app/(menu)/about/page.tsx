'use client';

import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { logoImgAddresses, otherImg, logoName } from '../../../../public/data/data';
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
        <h1 className={styles['about-title']}>
          About<span className={styles['dot']}>.</span>
        </h1>
        <div className={styles['content-container']}>
          <Image
            className={styles['content-img']}
            src="/img/yoda1.jpg"
            width={450}
            height={450}
            priority={true}
            alt="profile"
          />
          <div className={styles['about-content-container']}>
            <h1 className={styles['about-name']}>유동빈 (Dongbin Yoo)</h1>
            <p className={styles['about-content']}>반갑습니다!</p>
            <p className={styles['about-content']}>
              저는 코드를 통해 직관적이고 아름다운 UI/UX를 구현하는 일에 큰 보람을 느껴 프론트엔드
              개발을 하고 있는 유동빈입니다.
            </p>
            <p className={styles['about-content']}>
              저는 대학을 졸업할 때까지 특별한 꿈이나 목표가 없었습니다.
            </p>
            <p className={styles['about-content']}>
              하지만, 프론트엔드 개발을 만나고 저의 무의미한 생각들이 가치 있는 방향으로 활용될 수
              있게 되었고, 결과물을 눈으로 확인하며 큰 즐거움과 성취감도 느낄 수 있었습니다.
            </p>
            <p className={styles['about-content']}>
              이렇게 탄생한 결과물들이 많은 사람들에게 도움이 되는 가치를 가질 수 있다는 점은 또
              하나의 큰 동기부여가 되어, 하루하루 프론트엔드 개발자가 되기 위해 노력하고 있습니다.
            </p>
            <div className={styles['resume-link-container']}>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:948dab97-7c63-41f6-ace4-d7d3edc6f379"
                target="_blank"
                rel="noopener noreferrer"
                className={styles['resume-link-text']}
              >
                resume
              </a>
              <HiOutlineArrowLongRight className={styles['resume-arrow-icon']} />
            </div>
          </div>
        </div>
        <div className={styles['img-container']}>
          {logoImgAddresses.map((url, index) => {
            return (
              <div key={url} className={styles['icon-container']}>
                <Image className={styles['icon']} src={url} width={150} height={150} alt="skills" />
                <div className={styles['overlay']}>
                  <div className={styles['overlay-text']}>{logoName[index]}</div>
                </div>
              </div>
            );
          })}

          <Image
            className={styles['programmer-img']}
            src={otherImg.person}
            width={300}
            height={300}
            alt="programmer"
          />
        </div>
      </main>
    </>
  );
}
