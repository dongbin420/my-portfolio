import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import {
  logoImgAddresses,
  otherImg,
  logoName,
} from '../../../../public/data/data';

export default function Page() {
  return (
    <main className={styles['main-container']}>
      <h1 className={styles['about-title']}>
        About<span className={styles['dot']}>.</span>
      </h1>
      <div className={styles['content-container']}>
        <div className={styles['about-content-container']}>
          <p className={styles['about-content']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            deserunt aliquam in recusandae nesciunt voluptates sequi quos? Dolor
            temporibus deleniti iste reprehenderit, error cumque. Soluta
            mollitia ab assumenda aliquid architecto. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Distinctio, ea blanditiis. Itaque
            natus eius nostrum similique, excepturi tenetur, accusamus qui
            blanditiis laboriosam dolores, aspernatur repudiandae consectetur
            debitis ipsa obcaecati! Atque.
          </p>
          <div className={styles['resume-link-container']}>
            <a
              href="https://drive.google.com/file/d/1B7gR0ik2f4DmDLFyyNZCXEGuNTp2JJYK/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['resume-link-text']}
            >
              resume
            </a>
            <HiOutlineArrowLongRight className={styles['resume-arrow-icon']} />
          </div>
        </div>

        <Image
          className={styles['content-img']}
          src="/img/yoda1.jpg"
          width={450}
          height={450}
          alt="profile"
        />
      </div>
      <div className={styles['img-container']}>
        {logoImgAddresses.map((url, index) => {
          return (
            <div key={url} className={styles['icon-container']}>
              <Image
                className={styles['icon']}
                src={url}
                width={150}
                height={150}
                alt="skills"
              />
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
  );
}
