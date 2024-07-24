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
              수행했던 프로젝트를 소개하는 개인 포트폴리오 웹사이트를 제작했습니다. 혼자서 기획부터
              디자인, 개발, 배포까지 수행하며 프론트엔드 개발의 전반적인 프로세스를 경험했던
              프로젝트입니다. 정적 웹사이트이지만, 사용자 경험을 최적화하고 Next.js와 타입스크립트를
              이용한 간단한 동적 기능들 또한 추가하여 프론트엔드 개발자에게 필요한 역량을 향상시킬
              수 있었습니다.
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
                  <p className={styles['project-info-content']}>2023/11 ~ 2023/12</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>역할</p>
                  <p className={styles['project-info-content']}>기획, FE, Deployment</p>
                </li>
              </div>
              <div className={styles['project-infos']}>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>팀 / 솔로</p>
                  <p className={styles['project-info-content']}>솔로(FE)</p>
                </li>
                <li className={styles['project-info']}>
                  <p className={styles['project-info-title']}>기술 스택</p>
                  <p className={styles['project-info-content']}>Next.js, TypeScript, Vercel</p>
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
                  SSR(Server Side Rendering)이 점점 인기가 많아지고, 현 시점에서 CSR(Client Side
                  Rendering)보다 좀 더 많은 장점을 가져다 주는 상황에서, 기본적으로 서버 컴포넌트를
                  사용하며 SSR 방식으로 렌더링을 하는 Next.js를 경험해보며 학습하기 위해 Next.js를
                  이용해 사이트를 개발했습니다.
                </p>
                <p>
                  비록, 백엔드 서버가 필요없는 정적 웹사이트인 포트폴리오를 개발하는 것이었지만
                  기본적으로 서버 컴포넌트를 사용해 SSR방식을 적용할 수 있으며, use client를 통해
                  클라이언트 컴포넌트도 사용할 수 있고, 이에 더하여 next/font, next/image, next/link
                  등 여러가지 웹사이트 최적화를 위한 기능들과 Next.js 13부터 도입된 App Router를
                  사용함으로써 Route Groups와 같은 Next.js의 최신 기능들도 사용할 수 있었기에 많은
                  이점을 얻을 수 있었습니다.
                </p>
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/Next-js-0142a44ff2914c20912f633f4d11b96f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: 프로젝트 도입을 위한 Next.js 학습하기
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
              <div className={styles['blog-link-container']}>
                <a
                  href="https://zonbin.notion.site/Next-js-Route-groups-b82c39e4e01d45f9951d8b64379f7b62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['blog-link-text']}
                >
                  블로그 글: Next.js 사용기 (Route groups, 최적화 등)
                </a>
                <HiOutlineArrowLongRight className={styles['blog-arrow-icon']} />
              </div>
            </div>
            <div className={styles['page-element']}>
              <div className={styles['page-element-vertical-1']}>
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

              <p className={styles['description-title']}>모든 기기에 대응하는 반응형 웹 구현</p>
              <div className={styles['description']}>
                <p>
                  데스크탑, 태블릿, 모바일 등 모든 기기에 최적화된 반응형 웹 디자인을
                  구현하였습니다.
                </p>
                <p>
                  모든 기기에 최적화된 반응형 디자인은 미디어쿼리를 이용하여 모든 페이지에
                  구현하였으며, 이에 따라 전반적인 웹 사이트의 사용성을 향상시킬 수 있었습니다.
                </p>
              </div>
            </div>
            <div>
              <div className={styles['page-element-vertical-2']}>
                <Image
                  className={styles['project-capture-vertical']}
                  src="/img/portfolio/portfolio-capture4.png"
                  width={700}
                  height={1700}
                  alt="projectCapture"
                />
                <Image
                  className={styles['project-capture-vertical']}
                  src="/img/portfolio/portfolio-video1.gif"
                  width={700}
                  height={1700}
                  alt="projectCapture"
                />
                <Image
                  className={styles['project-capture-vertical']}
                  src="/img/portfolio/portfolio-video1.gif"
                  width={700}
                  height={1700}
                  alt="projectCapture"
                />
              </div>

              <p className={styles['description-title']}>동적 기능 구현</p>
              <div className={styles['description']}>
                <p>
                  정적 웹사이트를 개발하였지만, HTML과 CSS만을 이용한 웹 퍼블리싱뿐만 아니라 이메일
                  전송 기능, 화면 크기에 반응하여 생성되는 햄버거 메뉴 전환 기능 등의 기능을
                  추가함으로써 웹 사이트를 보다 동적으로 구성했습니다.
                </p>
                <p>이러한 기능들은 클라이언트 컴포넌트에서 TypeScript를 활용하여 구현하였습니다.</p>
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
          </div>
        </section>
      </div>
    </main>
  );
}
