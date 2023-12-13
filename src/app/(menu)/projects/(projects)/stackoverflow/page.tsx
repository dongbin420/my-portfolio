import ProjectsHeader from '@/ui/ProjectsHeader/ProjectsHeader';
import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function Page() {
  return (
    <main>
      <section className={styles['top-section']}>
        <ProjectsHeader />
        <div className={styles['top-content-container']}>
          <Image
            className={styles['logo-img']}
            src="/img/stackoverflow.svg"
            width={500}
            height={100}
            alt="projectLogo"
          />
          <p className={styles['top-content-text']}>
            한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
            색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
            스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
            안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
            있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고 있었다.
            머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책 속 세계에
            빠져들었다.
          </p>
          <div className={styles['project-links']}>
            <div className={styles['project-link-container']}>
              <a
                className={styles['project-link']}
                href="https://main--lucent-gelato-d1cbf6.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <HiOutlineArrowLongRight className={styles['arrow']} />
            </div>
            <div className={styles['project-link-container']}>
              <a
                className={styles['project-link']}
                href="https://github.com/dongbin420/stackoverflow-clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <HiOutlineArrowLongRight className={styles['arrow']} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
