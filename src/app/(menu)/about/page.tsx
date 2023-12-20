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
            <h1 className={styles['about-name']}>유동빈 (Dongbin Yoo)</h1>
            <p className={styles['about-content']}>
              대학을 졸업할 때까지 인생을 살아오면서 뚜렷한 꿈이 없었습니다.
              조금이라도 흥미가 있는 분야를 찾지 못했던 탓입니다. 그러던 와중 웹
              개발, 특히 프론트엔드라는 분야에 대해 처음으로 접하게 된 것은 제
              인생에 있어서 큰 행운이었다고 생각합니다. 논리적이고, 유연한
              사고를 통해 문제를 해결하는 것을 좋아합니다. 이런 사고를 목적없이
              해오곤 했지만, 이 프론트엔드 분야는 이러한 저의 성향을 웹을 통해
              실현시켜주고, 눈으로 확인시켜주며 더 큰 즐거움과 이에 더하여 큰
              성취감까지 주는 분야가 되었습니다. 이렇게 탄생한 결과물들이
              사람들에게 도움이되는 비즈니스적인 가치를 가질 수 있다는 점은 또
              하나의 큰 동기부여가 되어 하루하루 프론트엔드 개발자가 되기위한
              노력을 하고있습니다.
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
