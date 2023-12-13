import ProjectsHeader from '@/ui/ProjectsHeader/ProjectsHeader';
import styles from './page.module.css';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles['container']}>
      <section className={styles['top-section']}>
        <ProjectsHeader />
        <div className={styles['top-content-container']}>
          <h1 className={styles['logo']}>MOVIE LOG</h1>
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
                href="http://code-main-24.s3-website.ap-northeast-2.amazonaws.com/"
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
                href="https://github.com/codestates-seb/seb44_main_024"
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
      <section className={styles['bottom-section']}>
        <div className={styles['page-container']}>
          <h1 className={styles['page-title']}>개요</h1>
          <ul className={styles['project-info-container']}>
            <div className={styles['project-infos']}>
              <li className={styles['project-info']}>
                <p className={styles['project-info-title']}>Timeline</p>
                <p className={styles['project-info-content']}>2023/06~07</p>
              </li>
              <li className={styles['project-info']}>
                <p className={styles['project-info-title']}>Team/Solo</p>
                <p className={styles['project-info-content']}>Team</p>
              </li>
            </div>
            <div className={styles['project-infos']}>
              <li className={styles['project-info']}>
                <p className={styles['project-info-title']}>My Role</p>
                <p className={styles['project-info-content']}>
                  기획, FE(영화 상세 페이지, 검색 페이지), CI/CD, Deployment
                </p>
              </li>
              <li className={styles['project-info']}>
                <p className={styles['project-info-title']}>Skills</p>
                <p className={styles['project-info-content']}>
                  React, TypeScript, Tailwind, Redux Toolkit, Github Actions,
                  AWS S3
                </p>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles['page-container']}>
          <h1 className={styles['page-title']}>영화 상세 페이지</h1>
          <div className={styles['detail-1']}>
            <Image
              className={styles['project-capture']}
              src="/img/movielog/project-capture1.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="projectCapture"
            />
            <Image
              className={styles['project-capture']}
              src="/img/movielog/project-capture2.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="projectCapture"
            />
            <Image
              className={styles['project-capture']}
              src="/img/movielog/project-capture3.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="projectCapture"
              priority={true}
            />
            <p className={styles['description-title']}>
              Redux Toolkit을 활용한 상태 관리
            </p>
            <p className={styles['description']}>
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아
              책을 읽고 있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을
              비추면서, 책 속 세계에 빠져들었다.
            </p>
          </div>
          <div className={styles['detail-2']}>
            <Image
              className={styles['project-capture']}
              src="/img/movielog/project-capture4.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="projectCapture"
            />
            <Image
              className={styles['project-capture']}
              src="/img/movielog/project-capture5.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="projectCapture"
            />
            <p className={styles['description-title']}>리뷰 기능 구현</p>
            <p className={styles['description']}>
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아
              책을 읽고 있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을
              비추면서, 책 속 세계에 빠져들었다.
            </p>
          </div>
          <div className={styles['detail-3']}>
            <Image
              className={styles['project-capture']}
              src="/img/movielog/project-capture6.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="projectCapture"
            />
            <Image
              className={styles['project-capture']}
              src="/img/movielog/project-capture7.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="projectCapture"
            />
            <p className={styles['description-title']}>페이지네이션 구현</p>
            <p className={styles['description']}>
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아
              책을 읽고 있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을
              비추면서, 책 속 세계에 빠져들었다.
            </p>
          </div>
        </div>
        <div className={styles['page-container']}>
          <h1 className={styles['page-title']}>검색 페이지</h1>
          <div className={styles['search-1']}>
            <Image
              className={styles['project-capture']}
              src="/img/movielog/project-capture8.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="projectCapture"
            />
            <p className={styles['description-title']}>검색 기능 구현</p>
            <p className={styles['description']}>
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아
              책을 읽고 있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을
              비추면서, 책 속 세계에 빠져들었다.
            </p>
          </div>
        </div>
        <div className={styles['page-container']}>
          <h1 className={styles['page-title']}>기타</h1>
          <div className={styles['extra-1']}>
            <p className={styles['description-title']}>타입스크립트</p>
            <p className={styles['description']}>
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아
              책을 읽고 있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을
              비추면서, 책 속 세계에 빠져들었다.
            </p>
          </div>
          <div className={styles['extra-2']}>
            <p className={styles['description-title']}>반응형 웹 구현</p>
            <p className={styles['description']}>
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아
              책을 읽고 있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을
              비추면서, 책 속 세계에 빠져들었다.
            </p>
          </div>
          <div className={styles['extra-3']}>
            <p className={styles['description-title']}>CI/CD & Deployment</p>
            <p className={styles['description']}>
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아
              책을 읽고 있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을
              비추면서, 책 속 세계에 빠져들었다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
