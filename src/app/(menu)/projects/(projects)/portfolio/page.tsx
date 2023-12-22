import styles from './page.module.css';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

export default function Page() {
  return (
    <main className={styles['container']}>
      <div className={styles['top-section-container']}>
        <section className={styles['top-section']}>
          <div className={styles['top-content-container']}>
            <div className={styles['logo']}>
              <span className={styles['logo-text']}>dongbin</span>
              <span className={styles['logo-dot']}>.</span>
            </div>

            <p className={styles['top-content-text']}>
              한 가을 날, 나뭇잎은 마치 화가의 팔레트에서 골라진 듯 다양한
              색상으로 물들어 있었다. 바람은 가을의 서곡을 연주하며 나뭇가지를
              스치고 지나가고, 노란 잎사귀들은 춤추듯 공중을 떠돌았다. 작은 공원
              안에는 어린이들이 놀이터에서 웃음소리를 내며 즐거운 시간을 보내고
              있었다. 공원 한 쪽의 벤치에는 한 남성이 혼자 앉아 책을 읽고
              있었다. 머리카락 사이로 가을 햇살이 스며들어 얼굴을 비추면서, 책
              속 세계에 빠져들었다.
            </p>
            <div className={styles['project-links']}>
              <div className={styles['project-link-container']}>
                <a
                  className={styles['project-link']}
                  href="https://dongbin.vercel.app/"
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
                  href="https://github.com/dongbin420/my-portfolio"
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
      </div>
      <div className={styles['bottom-section-container']}>
        <section className={styles['bottom-section']}>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>개요</h1>
            <ul className={styles['project-info-container']}>
              <div className={styles['project-infos']}>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>프로젝트 기간</p>
                  <p className={styles['project-info-content']}>
                    2023/10~ (진행중)
                  </p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>역할</p>
                  <p className={styles['project-info-content']}>
                    기획, FE, Deployment
                  </p>
                </li>
              </div>
              <div className={styles['project-infos']}>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>팀 / 솔로</p>
                  <p className={styles['project-info-content']}>솔로(FE)</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>기술 스택</p>
                  <p className={styles['project-info-content']}>
                    Next.js, Vercel
                  </p>
                </li>
              </div>
            </ul>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>소개</h1>
            <div className={styles['page-element']}>
              <Image
                className={`${styles['project-capture']} ${styles['last-capture']}`}
                src="/img/portfolio/portfolio-capture1.png"
                width={1300}
                height={650}
                alt="projectCapture"
              />
              <p className={styles['description-title']}>Next.js 도입</p>
              <div className={styles['description']}>
                <p>
                  SSR(Server Side Rendering)이 점점 인기가 많아지고, 현 시점에서
                  CSR(Client Side Rendering)보다 좀 더 많은 장점을 가져다 주는
                  상황에서, 기본적으로 서버 컴포넌트를 사용하며 SSR 방식으로
                  렌더링을 하는 Next.js를 경험해보며 학습하기 위해 Next.js를
                  이용해 사이트를 개발했습니다.
                </p>
                <p>
                  비록, 서버가 필요없는 정적 웹사이트인 포트폴리오를 개발하는
                  것이었지만 기본적으로 서버 컴포넌트를 사용해 SSR방식을 적용할
                  수 있으며 use client를 통해 클라이언트 컴포넌트도 사용할 수
                  있고 이에 더하여 next/font, next/image, next/link 등의
                  여러가지 최적화를 위한 기능들을 사용할 수 있었기에 많은 이점을
                  얻을 수 있었습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/fe85020f2a9a405ca4e735cf6ee68128?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: (수정필요)
                </a>
                <HiOutlineArrowLongRight
                  className={styles['blog-arrow-icon']}
                />
              </div>
            </div>
            <div className={styles['page-element']}>
              <div className={styles['page-element-vertical']}>
                <Image
                  className={styles['project-capture-vertical-1']}
                  src="/img/portfolio/portfolio-capture2.png"
                  width={350}
                  height={750}
                  alt="projectCapture"
                />
                <Image
                  className={styles['project-capture-vertical-2']}
                  src="/img/portfolio/portfolio-capture3.png"
                  width={961}
                  height={640}
                  alt="projectCapture"
                />
              </div>

              <p className={styles['description-title']}>
                모든 기기에 대응하는 반응형 웹 구현
              </p>
              <div className={styles['description']}>
                <p>
                  데스크탑, 태블릿, 모바일 등 모든 기기에 최적화된 반응형 웹
                  디자인을 구현하였습니다.
                </p>
                <p>
                  모든 기기에 최적화된 반응형 디자인은 미디어쿼리를 이용하여
                  모든 페이지에 구현하였으며, 이에 따라 전반적인 웹 사이트의
                  사용성을 향상시킬 수 있었습니다.
                </p>
              </div>
            </div>
            <div>
              <div className={styles['page-element-vertical']}>
                <Image
                  className={styles['project-capture-vertical']}
                  src="/img/portfolio/portfolio-capture4.png"
                  width={700}
                  height={1700}
                  alt="projectCapture"
                />
                <Image
                  className={styles['project-capture-vertical']}
                  src="/img/portfolio/portfolio-capture5.png"
                  width={700}
                  height={1700}
                  alt="projectCapture"
                />
                <Image
                  className={styles['project-capture-vertical']}
                  src="/img/portfolio/portfolio-capture5.png"
                  width={700}
                  height={1700}
                  alt="projectCapture"
                />
              </div>

              <p className={styles['description-title']}>
                동적 기능 구현(사진 gif로 변경)
              </p>
              <div className={styles['description']}>
                <p>
                  정적 웹사이트를 개발하였지만, HTML과 CSS만을 이용한 웹
                  퍼블리싱뿐만 아니라 이메일 전송 기능, 화면 크기에 반응하여
                  생성되는 햄버거 메뉴 전환 기능, 다크모드(구현 예정) 등의
                  기능을 추가함으로써 웹 사이트를 보다 동적으로 구성했습니다.
                </p>
                <p>
                  이러한 기능들은 클라이언트 컴포넌트에서 TypeScript를 활용하여
                  구현하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles['page-container']}>
            <h1 className={styles['page-title']}>기타</h1>
            <div className={styles['extra-element']}>
              <p className={styles['description-title']}>Deployment</p>
              <div className={styles['description']}>
                <p>Vercel을 활용하여 정적 웹 사이트 호스팅을 구성하였습니다.</p>
              </div>
            </div>
            <div>
              <p className={styles['description-title']}>
                도메인 구매(예정)(수정필요)
              </p>
              <div className={styles['description']}>
                <p>
                  Netlify를 활용하여 정적 웹 사이트 호스팅을
                  구성하였습니다.(수정필요)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
