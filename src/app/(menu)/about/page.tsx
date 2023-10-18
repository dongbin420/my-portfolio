import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { imgAddresses } from '../../../../public/data/data';

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
      <div className={styles['icon-container']}>
        {imgAddresses.map((url) => {
          return (
            <Image
              key={url}
              className={styles['icon']}
              src={url}
              width={150}
              height={150}
              alt="skills"
            />
          );
        })}

        <Image
          className={styles['programmer-img']}
          src="https://cdn1.vectorstock.com/i/1000x1000/26/00/man-working-on-computer-icon-vector-15262600.jpg"
          width={300}
          height={300}
          alt="programmer"
        />
      </div>
    </main>
  );
}
