import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import {
  logoImgAddresses,
  otherImg,
  logoName,
} from '../../../../public/data/data';
import MenuHeader from '@/ui/MenuHeader/MenuHeader';

export default function Page() {
  return (
    <>
      <MenuHeader />
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
            <p className={styles['about-content']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              deserunt aliquam in recusandae nesciunt voluptates sequi quos?
              Dolor temporibus deleniti iste reprehenderit, error cumque. Soluta
              mollitia ab assumenda aliquid architecto. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Distinctio, ea blanditiis.
              Itaque natus eius nostrum similique, excepturi tenetur, accusamus
              qui blanditiis laboriosam dolores, aspernatur repudiandae
              consectetur debitis ipsa obcaecati! Atque.
            </p>
            <div className={styles['resume-link-container']}>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:831d267b-e07e-47fd-8021-8d5f0c89d711"
                target="_blank"
                rel="noopener noreferrer"
                className={styles['resume-link-text']}
              >
                resume
              </a>
              <HiOutlineArrowLongRight
                className={styles['resume-arrow-icon']}
              />
            </div>
          </div>
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
                  <div className={styles['overlay-text']}>
                    {logoName[index]}
                  </div>
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
