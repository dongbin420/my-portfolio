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
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다. 그의 눈은 문장마다 깊은 사색에 잠겨 있었다.
              주위의 소음이 그를 방해하지 않았다. 오히려 도시의 소란이 그의
              마음을 더욱 평화롭게 만들어주었다. 이 남성은 일상의 소소한 순간을
              즐기며 삶을 살아가는 사람이었다. 그의 마음 속에는 작은 기쁨들이
              꽃처럼 피어나 있었고, 어떤 어려움에 부딪혀도 그것을 이겨내기 위한
              힘이 있었다. 산책로를 따라 걷는 동안, 그는 주위의 아름다움에
              감사하며 삶의 소중함을 느꼈다.
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
